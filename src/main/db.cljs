(ns main.db
  (:require
   [main.logic :refer [generate-board move!]]))

(def board (atom (generate-board)))

