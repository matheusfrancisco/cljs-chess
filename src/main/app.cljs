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
(defn execute-move [b f t m]
  (let [valid (filter (fn [[file rank]]
                        (if (and (= file (first t))
                                 (= rank (second t)))
                          true
                          false)) m)]
    (when (seq valid)
      (l/move! b f t))))

(defn handle-click [_e piece-position id select row col set-path path]
  (let [{:keys [type value]} (get @board [row col])
        possible-moves (l/possible-moves [row col] @board)
        _ (set-path possible-moves)]
    (if (and  (nil? value) (not (nil? piece-position)))
      (execute-move board (-> piece-position :pos) [row col] path)
      (if (nil? piece-position)
        (select {:id id :pos [row col]})
        (if (= id piece-position)
          (select {:id nil :pos nil})
          (select {:id id :pos [row col]}))))))

(defn make-initial-board []
  (let [[piece-position select-positon] (hooks/use-state {:id nil :pos nil})
        [path set-path] (hooks/use-state nil)]
    (hooks/use-effect [path] (prn path))
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
                    :on-click #(handle-click % piece-position id select-positon row col set-path path)
                    :style {:background-color (when (or (=  id (-> piece-position :id))
                                                        (get path id false))
                                                "green")}
                    :id id}
                   (d/div {:id id
                           :draggable true
                           :on-drag #(handle-drag % id)
                           :on-drag-over #(.preventDefault %)}
                          (when (not (nil? value))
                            (get-icon type value))))))))))))
;; app
(defnc app []
  (let [[_state _set-state] (hooks/use-state {})]
    (d/div
     (d/div
      {:className "headings"}
      (d/h1 "Cljs Chess")
      (d/h2 "Chess Game made with CLJS")
      (make-initial-board)))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
