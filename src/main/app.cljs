(ns main.app
  (:require
   ["react-dom/client" :as rdom]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [main.db :refer [state]]
   [main.lib :refer [defnc]]))

(defn classname [n]
  (if (even? n) "light" "dark"))

(defn board-id [row col]
  (str (char (+ 96 (inc col))) row))

(defn col-index [col]
  (str (char (+ 97 col))))

(defn handle-drag [e _start]
  (js/console.log e))

(defn handle-click [e clicked r c]
  (js/console.log e)
  (js/console.log clicked r c))

(defn make-initial-board []
  (d/table
   {:className "chess-board"}
   (d/tbody
    (d/tr
     (d/th nil)
     (for [col (range 8)]
       (d/th {:key col} (col-index col))))
    (for [row (range 8 0 -1)]
      (d/tr {:key row}
            (d/th  row)
            (for [col (range 8)]
              (d/td
               {:className (classname (+ row col))
                :key (board-id row col)
                :id (board-id row col)}
               (let [{:keys [value _type]} (get @state [row col])
                     id (board-id row col)]
                 (d/div {:id id
                         :draggable true
                         :on-click #(handle-click % id row col)
                         :on-drag #(handle-drag % id)
                         :on-drag-over #(.preventDefault %)}
                        value)))))))))

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
