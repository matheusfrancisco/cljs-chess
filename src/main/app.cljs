(ns main.app
  (:require
   ["react-dom/client" :as rdom]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [main.db :refer [board]]
   [main.lib :refer [defnc]]
   [main.logic :as l :refer [get-icon]]))

(defn classname [n]
  (if (even? n) "light" "dark"))

(defn handle-drag [e _start]
  (js/console.log e))

;; (defn handle-click [e clicked r c]
;;   (js/console.log e)
;;   (js/console.log clicked r c))
;;
(defn execute-move [b f [file rank] m]
  (let [mf (get m (l/board-id file rank))]
    (prn mf 11)
    (when  mf
      (l/move! b f [file rank]))))

(defn do-select [row col id moves select set-path]
  (select {:id id :pos [row col]})
  (set-path moves))

(defn select-piece [piece row col id moves select set-path]
  (if (nil? (:id piece))
    (do-select row col id moves select set-path)
    (if (= id (:id piece))
      (select {:id nil :pos nil})
      (do-select row col id moves select set-path))))

(defn handle-click [_e piece-position id select row col set-path path]
  (let [{:keys [type value]} (get @board [row col])
        possible-moves (l/positions->id [row col] @board)]
    (prn possible-moves)
    (if (nil? path)
      (select-piece piece-position row col id possible-moves select set-path)
      (if (l/next-move? path [row col])
        (do 
          (execute-move board (-> piece-position :pos) [row col] path)
          (set-path nil))
        (select-piece piece-position row col id possible-moves select set-path)))))

(defn game
  []
  (let [[piece select-positon] (hooks/use-state {:id nil :pos nil})
        [path set-path] (hooks/use-state nil)
        [state set-state] (hooks/use-state {})]
    (d/table
     {:className "chess-board"}
     (d/tbody
      (d/tr
       (d/th nil)
       (for [col (range 8)]
         (d/th {:key col} (l/col-index col))))
      (for [row (range 8 0 -1)]
        (d/tr {:key row}
              (d/th  row)
              (for [col (range 8)]
                (let [{:keys [value type]} (get @board [row col])
                      id (l/board-id row col)]
                  (d/td
                   {:className (classname (+ row col))
                    :key id
                    :on-click #(handle-click 
                                 % piece id select-positon row col set-path path)
                    :style {:background-color (when (= id (-> piece :id))
                                                "rgb(221 211 96 / 82%)")}
                    :id id}
                   (d/div {:id id
                           :className (when (and
                                             (not (nil? path))
                                             (get path id))
                                        "hint")
                           #_#_:draggable true
                           #_#_:on-drag #(handle-drag % id)
                           #_#_:on-drag-over #(.preventDefault %)}
                          (when (not (nil? value))
                            (get-icon type value))))))))))))
;; app
(defnc app []
  (d/div
   (d/div
    {:className "headings"}
    (d/h1 "Cljs Chess")
    (d/h2 "Chess Game made with CLJS")
    (game))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
