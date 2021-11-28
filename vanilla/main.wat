;; In both the binary and textual formats, the fundamental unit of code in WebAssembly is a module.
;; In the text format, a module is represented as one big S-expression.

(module
  (import "console" "log" (func $log (param i32)))

  (func $add (param $p1 i32) (param $p2 i32) (result i32)
    get_local $p1
    get_local $p2
    i32.add)

    (func $logResult (param $p1 i32)
    get_local $p1
    call $log)
  
  (export "add" (func $add))
  (export "logResult" (func $logResult))
)
