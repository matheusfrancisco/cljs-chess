(ns main.app
  (:require
   ["react-dom/client" :as rdom]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [main.lib :refer [defnc]]))

(def state
  (atom
   {[8 0] \u265C
    [8 1] \u265E
    [8 2] \u265D
    [8 3] \u265B
    [8 4] \u265A
    [8 5] \u265D
    [8 6] \u265E
    [8 7] \u265C
    [7 0] \u265F
    [7 1] \u265F
    [7 2] \u265F
    [7 3] \u265F
    [7 4] \u265F
    [7 5] \u265F
    [7 6] \u265F
    [7 7] \u265F
;;white
    [2 0] \u2659
    [2 1] \u2659
    [2 2] \u2659
    [2 3] \u2659
    [2 4] \u2659
    [2 5] \u2659
    [2 6] \u2659
    [2 7] \u2659
    [1 0] \u2656
    [1 1] \u2658
    [1 2] \u2657
    [1 3] \u2655
    [1 4] \u2654
    [1 5] \u2657
    [1 6] \u2658
    [1 7] \u2656}))

(defn classname [n]
  (if (even? n) "light" "dark"))

(defn board-id [row col]
  (str (char (+ 96 col)) row))

(defn col-index [col]
  (str (char (+ 97 col))))

(defn make-initial-board []
  (d/table
   {:className "chess-board"}
   (d/tbody
    (d/tr
     (d/th nil)
     (for [col (range 8)]
       (d/th (col-index col))))
    (for [row (range 8 0 -1)]
      (d/tr
       (d/th row)
       (for [col (range 8)]
         (d/td
          {:className (classname (+ row col))
           :id (board-id row col)}
          (get @state [row col]))))))))

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
