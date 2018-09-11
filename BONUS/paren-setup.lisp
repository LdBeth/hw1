;;; Refactored by LdBeth
;;; from Void Setup https://www.youtube.com/watch?v=RuA9ZwIW7Mg

(in-package :ps)

(defun setup ()
  (create-canvas 400 400)
  undefined)

(defvar *a* 0)

(defun draw ()
  (fill "#021050")
  (rect 0 0 width height)
  (translate (+ 200 (* *a* 10)) (+ 200 (* *a* 10)))
  (rotate *a*)
  (scale (/ *a* 15))
  (setf *a* (+ *a* 0.05))
  (kao 0 -50)
  (kao 1 50)
  (if (> *a* 30)
      (setf *a* (- *a* 50)))
  undefined)

(defun kao (don b)
  (stroke 0)
  (stroke-weight 2)

  (fill "#e7eedd")
  (ellipse b 0 50 50)
  (no-stroke)
  (fill (if don "#68c0c0" "#f84828"))
  (ellipse b 0 38 38)

  (stroke 0)
  (stroke-weight 1.4)
  (arc (+ b 4.26) 5 8.5 7.3 0.3 *pi* *open*)
  (arc (- b 4.26) 5 8.5 7.3 0.3 (- *pi* 0.3) *open*)

  (fill 0)
  (ellipse (- b 11) -2 6.56 7)
  (ellipse (+ b 11) -2 6.56 7))
