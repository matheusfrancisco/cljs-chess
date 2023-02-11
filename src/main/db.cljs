(ns main.db
  (:require
   [main.logic :refer [generate-board move!]]))

(def board (atom (generate-board)))

(comment
  (move! board [2 0] [3 0]))
