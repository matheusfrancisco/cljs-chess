(ns main.app
  (:require
   ["react-dom/client" :as rdom]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [main.lib :refer [defnc]]))

;; app
(defnc app []
  (let [[_state _set-state] (hooks/use-state {})]
    (d/div
     (d/div
      {:className "headings"}
      (d/h1 "Cljs Chess")
      (d/h2 "Chess Game made with CLJS"))
     (d/table
      {:className "chess-board"}
      (d/tbody
       (d/tr
        (d/th)
        (d/th "a")
        (d/th "b")
        (d/th "c")
        (d/th "d")
        (d/th "e")
        (d/th "f")
        (d/th "g")
        (d/th "h"))
       (d/tr
        (d/th "8")
        (d/td {:className "light" :id "a8"} "\u265C")
        (d/td {:className "black" :id "b8"} "\u265E")
        (d/td {:className "light" :id "c8"} "\u265D")
        (d/td {:className "black" :id "d8"} "\u265B")
        (d/td {:className "light" :id "e8"} "\u265A")
        (d/td {:className "black" :id "f8"} "\u265D")
        (d/td {:className "light" :id "g8"} "\u265E")
        (d/td {:className "black" :id "h8"} "\u265C"))

       (d/tr
        (d/th "7")
        (d/td {:className "black" :id "a7"} "\u265F")
        (d/td {:className "light" :id "b7"} "\u265F")
        (d/td {:className "black" :id "c7"} "\u265F")
        (d/td {:className "light" :id "d7"} "\u265F")
        (d/td {:className "black" :id "e7"} "\u265F")
        (d/td {:className "light" :id "f7"} "\u265F")
        (d/td {:className "black" :id "g7"} "\u265F")
        (d/td {:className "light" :id "h7"} "\u265F"))

       (d/tr
        (d/th "6")
        (d/td {:className "light" :id "a6"})
        (d/td {:className "black" :id "b6"})
        (d/td {:className "light" :id "c6"})
        (d/td {:className "black" :id "d6"})
        (d/td {:className "light" :id "e6"})
        (d/td {:className "black" :id "f6"})
        (d/td {:className "light" :id "g6"})
        (d/td {:className "black" :id "h6"}))

       (d/tr
        (d/th "5")
        (d/td {:className "black" :id "a5"})
        (d/td {:className "light" :id "b5"})
        (d/td {:className "black" :id "c5"})
        (d/td {:className "light" :id "d5"})
        (d/td {:className "black" :id "e5"})
        (d/td {:className "light" :id "f5"})
        (d/td {:className "black" :id "g5"})
        (d/td {:className "light" :id "h5"}))

       (d/tr
        (d/th "4")
        (d/td {:className "light" :id "a4"})
        (d/td {:className "black" :id "b4"})
        (d/td {:className "light" :id "c4"})
        (d/td {:className "black" :id "d4"})
        (d/td {:className "light" :id "e4"})
        (d/td {:className "black" :id "f4"})
        (d/td {:className "light" :id "g4"})
        (d/td {:className "black" :id "h4"}))

       (d/tr
        (d/th "3")
        (d/td {:className "black" :id "a3"})
        (d/td {:className "light" :id "b3"})
        (d/td {:className "black" :id "c3"})
        (d/td {:className "light" :id "d3"})
        (d/td {:className "black" :id "e3"})
        (d/td {:className "light" :id "f3"})
        (d/td {:className "black" :id "g3"})
        (d/td {:className "light" :id "h3"}))

       (d/tr
        (d/th "2")
        (d/td {:className "light" :id "a2"} "\u2659")
        (d/td {:className "black" :id "b2"} "\u2659")
        (d/td {:className "light" :id "c2"} "\u2659")
        (d/td {:className "black" :id "d2"} "\u2659")
        (d/td {:className "light" :id "e2"} "\u2659")
        (d/td {:className "black" :id "f2"} "\u2659")
        (d/td {:className "light" :id "g2"} "\u2659")
        (d/td {:className "black" :id "h2"} "\u2659"))

       (d/tr
        (d/th "1")
        (d/td {:className "black" :id "a1"} "\u2656")
        (d/td {:className "light" :id "b1"} "\u2658")
        (d/td {:className "black" :id "c1"} "\u2657")
        (d/td {:className "light" :id "d1"} "\u2655")
        (d/td {:className "black" :id "e1"} "\u2654")
        (d/td {:className "light" :id "f1"} "\u2657")
        (d/td {:className "black" :id "g1"} "\u2658")
        (d/td {:className "light" :id "h1"} "\u2656")))))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
