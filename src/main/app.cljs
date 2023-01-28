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
     (d/div
      {:className "container"}

      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")

      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")

      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")

      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")

      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")

      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")

      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")

      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")
      (d/div {:className "black"} "b")
      (d/div {:className "white"} "a")))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
