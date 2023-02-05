(ns main.app-test
  (:require
   [clojure.test :refer [are deftest is]]
   [main.app :refer [board-id classname]]))

(deftest classname-test
  (is (= (classname 1) "dark"))
  (is (= (classname 0) "light")))

(deftest board-id-test
  (are [pos id]
       (let [[row col] pos]
         (= id (board-id row col)))
    [1 0] "a1"
    [2 0] "a2"
    [3 0] "a3"
    [4 0] "a4"
    [5 0] "a5"
    [6 0] "a6"
    [7 0] "a7"
    [8 0] "a8"

    [1 1] "b1"
    [2 1] "b2"
    [3 1] "b3"
    [4 1] "b4"
    [5 1] "b5"
    [6 1] "b6"
    [7 1] "b7"
    [8 1] "b8"

    [1 2] "c1"
    [2 2] "c2"
    [3 2] "c3"
    [4 2] "c4"
    [5 2] "c5"
    [6 2] "c6"
    [7 2] "c7"
    [8 2] "c8"

    [1 3] "d1"
    [2 3] "d2"
    [3 3] "d3"
    [4 3] "d4"
    [5 3] "d5"
    [6 3] "d6"
    [7 3] "d7"
    [8 3] "d8"

    [1 4] "e1"
    [2 4] "e2"
    [3 4] "e3"
    [4 4] "e4"
    [5 4] "e5"
    [6 4] "e6"
    [7 4] "e7"
    [8 4] "e8"

    [1 5] "f1"
    [2 5] "f2"
    [3 5] "f3"
    [4 5] "f4"
    [5 5] "f5"
    [6 5] "f6"
    [7 5] "f7"
    [8 5] "f8"

    [1 6] "g1"
    [2 6] "g2"
    [3 6] "g3"
    [4 6] "g4"
    [5 6] "g5"
    [6 6] "g6"
    [7 6] "g7"
    [8 6] "g8"

    [1 7] "h1"
    [2 7] "h2"
    [3 7] "h3"
    [4 7] "h4"
    [5 7] "h5"
    [6 7] "h6"
    [7 7] "h7"
    [8 7] "h8"))

(comment
  (board-id-test))
