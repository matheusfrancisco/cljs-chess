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
    [1 1] "a1"
    [2 1] "a2"
    [3 1] "a3"
    [4 1] "a4"
    [5 1] "a5"
    [6 1] "a6"
    [7 1] "a7"

    [1 2] "b1"
    [2 2] "b2"
    [3 2] "b3"
    [4 2] "b4"
    [5 2] "b5"
    [6 2] "b6"
    [7 2] "b7"

    [1 1] "a1"
    [2 1] "a2"
    [3 1] "a3"
    [4 1] "a4"
    [5 1] "a5"
    [6 1] "a6"
    [7 1] "a7"

    [1 1] "a1"
    [2 1] "a2"
    [3 1] "a3"
    [4 1] "a4"
    [5 1] "a5"
    [6 1] "a6"
    [7 1] "a7"

    [1 1] "a1"
    [2 1] "a2"
    [3 1] "a3"
    [4 1] "a4"
    [5 1] "a5"
    [6 1] "a6"
    [7 1] "a7"

    [1 1] "a1"
    [2 1] "a2"
    [3 1] "a3"
    [4 1] "a4"
    [5 1] "a5"
    [6 1] "a6"
    [7 1] "a7"
    ))

(comment 
  (board-id-test)
  )
