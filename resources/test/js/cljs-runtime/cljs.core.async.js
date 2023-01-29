goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13597 = (function (f,blockable,meta13598){
this.f = f;
this.blockable = blockable;
this.meta13598 = meta13598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13599,meta13598__$1){
var self__ = this;
var _13599__$1 = this;
return (new cljs.core.async.t_cljs$core$async13597(self__.f,self__.blockable,meta13598__$1));
}));

(cljs.core.async.t_cljs$core$async13597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13599){
var self__ = this;
var _13599__$1 = this;
return self__.meta13598;
}));

(cljs.core.async.t_cljs$core$async13597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13598","meta13598",1413551787,null)], null);
}));

(cljs.core.async.t_cljs$core$async13597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13597");

(cljs.core.async.t_cljs$core$async13597.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13597.
 */
cljs.core.async.__GT_t_cljs$core$async13597 = (function cljs$core$async$__GT_t_cljs$core$async13597(f,blockable,meta13598){
return (new cljs.core.async.t_cljs$core$async13597(f,blockable,meta13598));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13596 = arguments.length;
switch (G__13596) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13597(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13644 = arguments.length;
switch (G__13644) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13660 = arguments.length;
switch (G__13660) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13669 = arguments.length;
switch (G__13669) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16792 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16792) : fn1.call(null,val_16792));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16792) : fn1.call(null,val_16792));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13687 = arguments.length;
switch (G__13687) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___16801 = n;
var x_16802 = (0);
while(true){
if((x_16802 < n__5636__auto___16801)){
(a[x_16802] = x_16802);

var G__16803 = (x_16802 + (1));
x_16802 = G__16803;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13723 = (function (flag,meta13724){
this.flag = flag;
this.meta13724 = meta13724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13725,meta13724__$1){
var self__ = this;
var _13725__$1 = this;
return (new cljs.core.async.t_cljs$core$async13723(self__.flag,meta13724__$1));
}));

(cljs.core.async.t_cljs$core$async13723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13725){
var self__ = this;
var _13725__$1 = this;
return self__.meta13724;
}));

(cljs.core.async.t_cljs$core$async13723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13724","meta13724",1520350770,null)], null);
}));

(cljs.core.async.t_cljs$core$async13723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13723");

(cljs.core.async.t_cljs$core$async13723.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13723.
 */
cljs.core.async.__GT_t_cljs$core$async13723 = (function cljs$core$async$__GT_t_cljs$core$async13723(flag,meta13724){
return (new cljs.core.async.t_cljs$core$async13723(flag,meta13724));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13723(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13739 = (function (flag,cb,meta13740){
this.flag = flag;
this.cb = cb;
this.meta13740 = meta13740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13741,meta13740__$1){
var self__ = this;
var _13741__$1 = this;
return (new cljs.core.async.t_cljs$core$async13739(self__.flag,self__.cb,meta13740__$1));
}));

(cljs.core.async.t_cljs$core$async13739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13741){
var self__ = this;
var _13741__$1 = this;
return self__.meta13740;
}));

(cljs.core.async.t_cljs$core$async13739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13740","meta13740",-612628331,null)], null);
}));

(cljs.core.async.t_cljs$core$async13739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13739");

(cljs.core.async.t_cljs$core$async13739.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13739.
 */
cljs.core.async.__GT_t_cljs$core$async13739 = (function cljs$core$async$__GT_t_cljs$core$async13739(flag,cb,meta13740){
return (new cljs.core.async.t_cljs$core$async13739(flag,cb,meta13740));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13739(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13778_SHARP_){
var G__13794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13778_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13794) : fret.call(null,G__13794));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13779_SHARP_){
var G__13795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13779_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13795) : fret.call(null,G__13795));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16827 = (i + (1));
i = G__16827;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16833 = arguments.length;
var i__5770__auto___16834 = (0);
while(true){
if((i__5770__auto___16834 < len__5769__auto___16833)){
args__5775__auto__.push((arguments[i__5770__auto___16834]));

var G__16835 = (i__5770__auto___16834 + (1));
i__5770__auto___16834 = G__16835;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13842){
var map__13844 = p__13842;
var map__13844__$1 = cljs.core.__destructure_map(map__13844);
var opts = map__13844__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13810){
var G__13811 = cljs.core.first(seq13810);
var seq13810__$1 = cljs.core.next(seq13810);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13811,seq13810__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13882 = arguments.length;
switch (G__13882) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13519__auto___16848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_13971){
var state_val_13972 = (state_13971[(1)]);
if((state_val_13972 === (7))){
var inst_13962 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13990_16849 = state_13971__$1;
(statearr_13990_16849[(2)] = inst_13962);

(statearr_13990_16849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (1))){
var state_13971__$1 = state_13971;
var statearr_13991_16851 = state_13971__$1;
(statearr_13991_16851[(2)] = null);

(statearr_13991_16851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (4))){
var inst_13932 = (state_13971[(7)]);
var inst_13932__$1 = (state_13971[(2)]);
var inst_13940 = (inst_13932__$1 == null);
var state_13971__$1 = (function (){var statearr_13992 = state_13971;
(statearr_13992[(7)] = inst_13932__$1);

return statearr_13992;
})();
if(cljs.core.truth_(inst_13940)){
var statearr_13993_16854 = state_13971__$1;
(statearr_13993_16854[(1)] = (5));

} else {
var statearr_13995_16857 = state_13971__$1;
(statearr_13995_16857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (13))){
var state_13971__$1 = state_13971;
var statearr_13996_16859 = state_13971__$1;
(statearr_13996_16859[(2)] = null);

(statearr_13996_16859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (6))){
var inst_13932 = (state_13971[(7)]);
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13971__$1,(11),to,inst_13932);
} else {
if((state_val_13972 === (3))){
var inst_13964 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13971__$1,inst_13964);
} else {
if((state_val_13972 === (12))){
var state_13971__$1 = state_13971;
var statearr_14001_16862 = state_13971__$1;
(statearr_14001_16862[(2)] = null);

(statearr_14001_16862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (2))){
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13971__$1,(4),from);
} else {
if((state_val_13972 === (11))){
var inst_13955 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
if(cljs.core.truth_(inst_13955)){
var statearr_14002_16873 = state_13971__$1;
(statearr_14002_16873[(1)] = (12));

} else {
var statearr_14006_16875 = state_13971__$1;
(statearr_14006_16875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (9))){
var state_13971__$1 = state_13971;
var statearr_14007_16877 = state_13971__$1;
(statearr_14007_16877[(2)] = null);

(statearr_14007_16877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (5))){
var state_13971__$1 = state_13971;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14011_16878 = state_13971__$1;
(statearr_14011_16878[(1)] = (8));

} else {
var statearr_14012_16880 = state_13971__$1;
(statearr_14012_16880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (14))){
var inst_13960 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_14013_16884 = state_13971__$1;
(statearr_14013_16884[(2)] = inst_13960);

(statearr_14013_16884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (10))){
var inst_13950 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_14014_16887 = state_13971__$1;
(statearr_14014_16887[(2)] = inst_13950);

(statearr_14014_16887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (8))){
var inst_13947 = cljs.core.async.close_BANG_(to);
var state_13971__$1 = state_13971;
var statearr_14018_16889 = state_13971__$1;
(statearr_14018_16889[(2)] = inst_13947);

(statearr_14018_16889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_14022 = [null,null,null,null,null,null,null,null];
(statearr_14022[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_14022[(1)] = (1));

return statearr_14022;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_13971){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_13971);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14023){var ex__12934__auto__ = e14023;
var statearr_14024_16892 = state_13971;
(statearr_14024_16892[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_13971[(4)]))){
var statearr_14025_16893 = state_13971;
(statearr_14025_16893[(1)] = cljs.core.first((state_13971[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16895 = state_13971;
state_13971 = G__16895;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_13971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_13971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14030 = f__13520__auto__();
(statearr_14030[(6)] = c__13519__auto___16848);

return statearr_14030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14045){
var vec__14046 = p__14045;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(1),null);
var job = vec__14046;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13519__auto___16898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14059){
var state_val_14060 = (state_14059[(1)]);
if((state_val_14060 === (1))){
var state_14059__$1 = state_14059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14059__$1,(2),res,v);
} else {
if((state_val_14060 === (2))){
var inst_14050 = (state_14059[(2)]);
var inst_14054 = cljs.core.async.close_BANG_(res);
var state_14059__$1 = (function (){var statearr_14065 = state_14059;
(statearr_14065[(7)] = inst_14050);

return statearr_14065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14059__$1,inst_14054);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0 = (function (){
var statearr_14066 = [null,null,null,null,null,null,null,null];
(statearr_14066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__);

(statearr_14066[(1)] = (1));

return statearr_14066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1 = (function (state_14059){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14059);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14069){var ex__12934__auto__ = e14069;
var statearr_14077_16903 = state_14059;
(statearr_14077_16903[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14059[(4)]))){
var statearr_14079_16904 = state_14059;
(statearr_14079_16904[(1)] = cljs.core.first((state_14059[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16906 = state_14059;
state_14059 = G__16906;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = function(state_14059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1.call(this,state_14059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14081 = f__13520__auto__();
(statearr_14081[(6)] = c__13519__auto___16898);

return statearr_14081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14090){
var vec__14091 = p__14090;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(1),null);
var job = vec__14091;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___16910 = n;
var __16911 = (0);
while(true){
if((__16911 < n__5636__auto___16910)){
var G__14100_16912 = type;
var G__14100_16913__$1 = (((G__14100_16912 instanceof cljs.core.Keyword))?G__14100_16912.fqn:null);
switch (G__14100_16913__$1) {
case "compute":
var c__13519__auto___16915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16911,c__13519__auto___16915,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async){
return (function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = ((function (__16911,c__13519__auto___16915,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async){
return (function (state_14113){
var state_val_14114 = (state_14113[(1)]);
if((state_val_14114 === (1))){
var state_14113__$1 = state_14113;
var statearr_14119_16916 = state_14113__$1;
(statearr_14119_16916[(2)] = null);

(statearr_14119_16916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (2))){
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14113__$1,(4),jobs);
} else {
if((state_val_14114 === (3))){
var inst_14111 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14113__$1,inst_14111);
} else {
if((state_val_14114 === (4))){
var inst_14103 = (state_14113[(2)]);
var inst_14104 = process__$1(inst_14103);
var state_14113__$1 = state_14113;
if(cljs.core.truth_(inst_14104)){
var statearr_14124_16929 = state_14113__$1;
(statearr_14124_16929[(1)] = (5));

} else {
var statearr_14126_16930 = state_14113__$1;
(statearr_14126_16930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (5))){
var state_14113__$1 = state_14113;
var statearr_14130_16931 = state_14113__$1;
(statearr_14130_16931[(2)] = null);

(statearr_14130_16931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (6))){
var state_14113__$1 = state_14113;
var statearr_14131_16933 = state_14113__$1;
(statearr_14131_16933[(2)] = null);

(statearr_14131_16933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (7))){
var inst_14109 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14132_16935 = state_14113__$1;
(statearr_14132_16935[(2)] = inst_14109);

(statearr_14132_16935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16911,c__13519__auto___16915,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async))
;
return ((function (__16911,switch__12930__auto__,c__13519__auto___16915,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0 = (function (){
var statearr_14134 = [null,null,null,null,null,null,null];
(statearr_14134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__);

(statearr_14134[(1)] = (1));

return statearr_14134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1 = (function (state_14113){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14113);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14135){var ex__12934__auto__ = e14135;
var statearr_14136_16937 = state_14113;
(statearr_14136_16937[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14113[(4)]))){
var statearr_14139_16947 = state_14113;
(statearr_14139_16947[(1)] = cljs.core.first((state_14113[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16954 = state_14113;
state_14113 = G__16954;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = function(state_14113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1.call(this,state_14113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__;
})()
;})(__16911,switch__12930__auto__,c__13519__auto___16915,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async))
})();
var state__13521__auto__ = (function (){var statearr_14142 = f__13520__auto__();
(statearr_14142[(6)] = c__13519__auto___16915);

return statearr_14142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
});})(__16911,c__13519__auto___16915,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async))
);


break;
case "async":
var c__13519__auto___16955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16911,c__13519__auto___16955,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async){
return (function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = ((function (__16911,c__13519__auto___16955,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async){
return (function (state_14160){
var state_val_14161 = (state_14160[(1)]);
if((state_val_14161 === (1))){
var state_14160__$1 = state_14160;
var statearr_14165_16958 = state_14160__$1;
(statearr_14165_16958[(2)] = null);

(statearr_14165_16958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14161 === (2))){
var state_14160__$1 = state_14160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14160__$1,(4),jobs);
} else {
if((state_val_14161 === (3))){
var inst_14158 = (state_14160[(2)]);
var state_14160__$1 = state_14160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14160__$1,inst_14158);
} else {
if((state_val_14161 === (4))){
var inst_14148 = (state_14160[(2)]);
var inst_14149 = async(inst_14148);
var state_14160__$1 = state_14160;
if(cljs.core.truth_(inst_14149)){
var statearr_14172_16961 = state_14160__$1;
(statearr_14172_16961[(1)] = (5));

} else {
var statearr_14175_16962 = state_14160__$1;
(statearr_14175_16962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14161 === (5))){
var state_14160__$1 = state_14160;
var statearr_14176_16963 = state_14160__$1;
(statearr_14176_16963[(2)] = null);

(statearr_14176_16963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14161 === (6))){
var state_14160__$1 = state_14160;
var statearr_14178_16972 = state_14160__$1;
(statearr_14178_16972[(2)] = null);

(statearr_14178_16972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14161 === (7))){
var inst_14156 = (state_14160[(2)]);
var state_14160__$1 = state_14160;
var statearr_14179_16973 = state_14160__$1;
(statearr_14179_16973[(2)] = inst_14156);

(statearr_14179_16973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16911,c__13519__auto___16955,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async))
;
return ((function (__16911,switch__12930__auto__,c__13519__auto___16955,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0 = (function (){
var statearr_14183 = [null,null,null,null,null,null,null];
(statearr_14183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__);

(statearr_14183[(1)] = (1));

return statearr_14183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1 = (function (state_14160){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14160);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14188){var ex__12934__auto__ = e14188;
var statearr_14189_16978 = state_14160;
(statearr_14189_16978[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14160[(4)]))){
var statearr_14190_16979 = state_14160;
(statearr_14190_16979[(1)] = cljs.core.first((state_14160[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16980 = state_14160;
state_14160 = G__16980;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = function(state_14160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1.call(this,state_14160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__;
})()
;})(__16911,switch__12930__auto__,c__13519__auto___16955,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async))
})();
var state__13521__auto__ = (function (){var statearr_14191 = f__13520__auto__();
(statearr_14191[(6)] = c__13519__auto___16955);

return statearr_14191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
});})(__16911,c__13519__auto___16955,G__14100_16912,G__14100_16913__$1,n__5636__auto___16910,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14100_16913__$1)].join('')));

}

var G__16981 = (__16911 + (1));
__16911 = G__16981;
continue;
} else {
}
break;
}

var c__13519__auto___16982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14220){
var state_val_14221 = (state_14220[(1)]);
if((state_val_14221 === (7))){
var inst_14215 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14227_16985 = state_14220__$1;
(statearr_14227_16985[(2)] = inst_14215);

(statearr_14227_16985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (1))){
var state_14220__$1 = state_14220;
var statearr_14230_16993 = state_14220__$1;
(statearr_14230_16993[(2)] = null);

(statearr_14230_16993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (4))){
var inst_14197 = (state_14220[(7)]);
var inst_14197__$1 = (state_14220[(2)]);
var inst_14198 = (inst_14197__$1 == null);
var state_14220__$1 = (function (){var statearr_14234 = state_14220;
(statearr_14234[(7)] = inst_14197__$1);

return statearr_14234;
})();
if(cljs.core.truth_(inst_14198)){
var statearr_14235_16994 = state_14220__$1;
(statearr_14235_16994[(1)] = (5));

} else {
var statearr_14236_16998 = state_14220__$1;
(statearr_14236_16998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (6))){
var inst_14197 = (state_14220[(7)]);
var inst_14203 = (state_14220[(8)]);
var inst_14203__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14207 = [inst_14197,inst_14203__$1];
var inst_14208 = (new cljs.core.PersistentVector(null,2,(5),inst_14206,inst_14207,null));
var state_14220__$1 = (function (){var statearr_14240 = state_14220;
(statearr_14240[(8)] = inst_14203__$1);

return statearr_14240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14220__$1,(8),jobs,inst_14208);
} else {
if((state_val_14221 === (3))){
var inst_14217 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14220__$1,inst_14217);
} else {
if((state_val_14221 === (2))){
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14220__$1,(4),from);
} else {
if((state_val_14221 === (9))){
var inst_14212 = (state_14220[(2)]);
var state_14220__$1 = (function (){var statearr_14245 = state_14220;
(statearr_14245[(9)] = inst_14212);

return statearr_14245;
})();
var statearr_14249_17001 = state_14220__$1;
(statearr_14249_17001[(2)] = null);

(statearr_14249_17001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (5))){
var inst_14201 = cljs.core.async.close_BANG_(jobs);
var state_14220__$1 = state_14220;
var statearr_14252_17010 = state_14220__$1;
(statearr_14252_17010[(2)] = inst_14201);

(statearr_14252_17010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (8))){
var inst_14203 = (state_14220[(8)]);
var inst_14210 = (state_14220[(2)]);
var state_14220__$1 = (function (){var statearr_14256 = state_14220;
(statearr_14256[(10)] = inst_14210);

return statearr_14256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14220__$1,(9),results,inst_14203);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0 = (function (){
var statearr_14259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__);

(statearr_14259[(1)] = (1));

return statearr_14259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1 = (function (state_14220){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14220);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14264){var ex__12934__auto__ = e14264;
var statearr_14265_17015 = state_14220;
(statearr_14265_17015[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14220[(4)]))){
var statearr_14269_17016 = state_14220;
(statearr_14269_17016[(1)] = cljs.core.first((state_14220[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17018 = state_14220;
state_14220 = G__17018;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = function(state_14220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1.call(this,state_14220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14275 = f__13520__auto__();
(statearr_14275[(6)] = c__13519__auto___16982);

return statearr_14275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


var c__13519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14319){
var state_val_14320 = (state_14319[(1)]);
if((state_val_14320 === (7))){
var inst_14313 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14327_17019 = state_14319__$1;
(statearr_14327_17019[(2)] = inst_14313);

(statearr_14327_17019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (20))){
var state_14319__$1 = state_14319;
var statearr_14329_17020 = state_14319__$1;
(statearr_14329_17020[(2)] = null);

(statearr_14329_17020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (1))){
var state_14319__$1 = state_14319;
var statearr_14333_17021 = state_14319__$1;
(statearr_14333_17021[(2)] = null);

(statearr_14333_17021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (4))){
var inst_14279 = (state_14319[(7)]);
var inst_14279__$1 = (state_14319[(2)]);
var inst_14280 = (inst_14279__$1 == null);
var state_14319__$1 = (function (){var statearr_14335 = state_14319;
(statearr_14335[(7)] = inst_14279__$1);

return statearr_14335;
})();
if(cljs.core.truth_(inst_14280)){
var statearr_14337_17027 = state_14319__$1;
(statearr_14337_17027[(1)] = (5));

} else {
var statearr_14338_17033 = state_14319__$1;
(statearr_14338_17033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (15))){
var inst_14293 = (state_14319[(8)]);
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14319__$1,(18),to,inst_14293);
} else {
if((state_val_14320 === (21))){
var inst_14308 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14341_17039 = state_14319__$1;
(statearr_14341_17039[(2)] = inst_14308);

(statearr_14341_17039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (13))){
var inst_14310 = (state_14319[(2)]);
var state_14319__$1 = (function (){var statearr_14345 = state_14319;
(statearr_14345[(9)] = inst_14310);

return statearr_14345;
})();
var statearr_14347_17044 = state_14319__$1;
(statearr_14347_17044[(2)] = null);

(statearr_14347_17044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (6))){
var inst_14279 = (state_14319[(7)]);
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14319__$1,(11),inst_14279);
} else {
if((state_val_14320 === (17))){
var inst_14303 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
if(cljs.core.truth_(inst_14303)){
var statearr_14353_17051 = state_14319__$1;
(statearr_14353_17051[(1)] = (19));

} else {
var statearr_14354_17052 = state_14319__$1;
(statearr_14354_17052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (3))){
var inst_14315 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14319__$1,inst_14315);
} else {
if((state_val_14320 === (12))){
var inst_14289 = (state_14319[(10)]);
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14319__$1,(14),inst_14289);
} else {
if((state_val_14320 === (2))){
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14319__$1,(4),results);
} else {
if((state_val_14320 === (19))){
var state_14319__$1 = state_14319;
var statearr_14358_17054 = state_14319__$1;
(statearr_14358_17054[(2)] = null);

(statearr_14358_17054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (11))){
var inst_14289 = (state_14319[(2)]);
var state_14319__$1 = (function (){var statearr_14360 = state_14319;
(statearr_14360[(10)] = inst_14289);

return statearr_14360;
})();
var statearr_14362_17055 = state_14319__$1;
(statearr_14362_17055[(2)] = null);

(statearr_14362_17055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (9))){
var state_14319__$1 = state_14319;
var statearr_14363_17056 = state_14319__$1;
(statearr_14363_17056[(2)] = null);

(statearr_14363_17056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (5))){
var state_14319__$1 = state_14319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14364_17058 = state_14319__$1;
(statearr_14364_17058[(1)] = (8));

} else {
var statearr_14366_17062 = state_14319__$1;
(statearr_14366_17062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (14))){
var inst_14293 = (state_14319[(8)]);
var inst_14297 = (state_14319[(11)]);
var inst_14293__$1 = (state_14319[(2)]);
var inst_14296 = (inst_14293__$1 == null);
var inst_14297__$1 = cljs.core.not(inst_14296);
var state_14319__$1 = (function (){var statearr_14368 = state_14319;
(statearr_14368[(8)] = inst_14293__$1);

(statearr_14368[(11)] = inst_14297__$1);

return statearr_14368;
})();
if(inst_14297__$1){
var statearr_14370_17068 = state_14319__$1;
(statearr_14370_17068[(1)] = (15));

} else {
var statearr_14371_17069 = state_14319__$1;
(statearr_14371_17069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (16))){
var inst_14297 = (state_14319[(11)]);
var state_14319__$1 = state_14319;
var statearr_14373_17071 = state_14319__$1;
(statearr_14373_17071[(2)] = inst_14297);

(statearr_14373_17071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (10))){
var inst_14286 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14377_17072 = state_14319__$1;
(statearr_14377_17072[(2)] = inst_14286);

(statearr_14377_17072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (18))){
var inst_14300 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14379_17073 = state_14319__$1;
(statearr_14379_17073[(2)] = inst_14300);

(statearr_14379_17073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (8))){
var inst_14283 = cljs.core.async.close_BANG_(to);
var state_14319__$1 = state_14319;
var statearr_14384_17079 = state_14319__$1;
(statearr_14384_17079[(2)] = inst_14283);

(statearr_14384_17079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0 = (function (){
var statearr_14390 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__);

(statearr_14390[(1)] = (1));

return statearr_14390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1 = (function (state_14319){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14319);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14395){var ex__12934__auto__ = e14395;
var statearr_14400_17083 = state_14319;
(statearr_14400_17083[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14319[(4)]))){
var statearr_14401_17084 = state_14319;
(statearr_14401_17084[(1)] = cljs.core.first((state_14319[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17085 = state_14319;
state_14319 = G__17085;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__ = function(state_14319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1.call(this,state_14319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14402 = f__13520__auto__();
(statearr_14402[(6)] = c__13519__auto__);

return statearr_14402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

return c__13519__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14408 = arguments.length;
switch (G__14408) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14412 = arguments.length;
switch (G__14412) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14419 = arguments.length;
switch (G__14419) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13519__auto___17120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14449){
var state_val_14450 = (state_14449[(1)]);
if((state_val_14450 === (7))){
var inst_14445 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14453_17122 = state_14449__$1;
(statearr_14453_17122[(2)] = inst_14445);

(statearr_14453_17122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (1))){
var state_14449__$1 = state_14449;
var statearr_14454_17129 = state_14449__$1;
(statearr_14454_17129[(2)] = null);

(statearr_14454_17129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (4))){
var inst_14426 = (state_14449[(7)]);
var inst_14426__$1 = (state_14449[(2)]);
var inst_14427 = (inst_14426__$1 == null);
var state_14449__$1 = (function (){var statearr_14458 = state_14449;
(statearr_14458[(7)] = inst_14426__$1);

return statearr_14458;
})();
if(cljs.core.truth_(inst_14427)){
var statearr_14459_17130 = state_14449__$1;
(statearr_14459_17130[(1)] = (5));

} else {
var statearr_14460_17131 = state_14449__$1;
(statearr_14460_17131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (13))){
var state_14449__$1 = state_14449;
var statearr_14462_17132 = state_14449__$1;
(statearr_14462_17132[(2)] = null);

(statearr_14462_17132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (6))){
var inst_14426 = (state_14449[(7)]);
var inst_14432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14426) : p.call(null,inst_14426));
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14432)){
var statearr_14463_17133 = state_14449__$1;
(statearr_14463_17133[(1)] = (9));

} else {
var statearr_14464_17134 = state_14449__$1;
(statearr_14464_17134[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (3))){
var inst_14447 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14449__$1,inst_14447);
} else {
if((state_val_14450 === (12))){
var state_14449__$1 = state_14449;
var statearr_14465_17142 = state_14449__$1;
(statearr_14465_17142[(2)] = null);

(statearr_14465_17142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (2))){
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14449__$1,(4),ch);
} else {
if((state_val_14450 === (11))){
var inst_14426 = (state_14449[(7)]);
var inst_14436 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14449__$1,(8),inst_14436,inst_14426);
} else {
if((state_val_14450 === (9))){
var state_14449__$1 = state_14449;
var statearr_14468_17143 = state_14449__$1;
(statearr_14468_17143[(2)] = tc);

(statearr_14468_17143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (5))){
var inst_14429 = cljs.core.async.close_BANG_(tc);
var inst_14430 = cljs.core.async.close_BANG_(fc);
var state_14449__$1 = (function (){var statearr_14470 = state_14449;
(statearr_14470[(8)] = inst_14429);

return statearr_14470;
})();
var statearr_14471_17144 = state_14449__$1;
(statearr_14471_17144[(2)] = inst_14430);

(statearr_14471_17144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (14))){
var inst_14443 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14472_17145 = state_14449__$1;
(statearr_14472_17145[(2)] = inst_14443);

(statearr_14472_17145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (10))){
var state_14449__$1 = state_14449;
var statearr_14473_17151 = state_14449__$1;
(statearr_14473_17151[(2)] = fc);

(statearr_14473_17151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (8))){
var inst_14438 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14438)){
var statearr_14477_17157 = state_14449__$1;
(statearr_14477_17157[(1)] = (12));

} else {
var statearr_14478_17161 = state_14449__$1;
(statearr_14478_17161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_14480 = [null,null,null,null,null,null,null,null,null];
(statearr_14480[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_14480[(1)] = (1));

return statearr_14480;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_14449){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14449);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14482){var ex__12934__auto__ = e14482;
var statearr_14483_17168 = state_14449;
(statearr_14483_17168[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14449[(4)]))){
var statearr_14484_17169 = state_14449;
(statearr_14484_17169[(1)] = cljs.core.first((state_14449[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17176 = state_14449;
state_14449 = G__17176;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_14449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_14449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14490 = f__13520__auto__();
(statearr_14490[(6)] = c__13519__auto___17120);

return statearr_14490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14518){
var state_val_14519 = (state_14518[(1)]);
if((state_val_14519 === (7))){
var inst_14514 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14521_17185 = state_14518__$1;
(statearr_14521_17185[(2)] = inst_14514);

(statearr_14521_17185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (1))){
var inst_14497 = init;
var inst_14498 = inst_14497;
var state_14518__$1 = (function (){var statearr_14522 = state_14518;
(statearr_14522[(7)] = inst_14498);

return statearr_14522;
})();
var statearr_14525_17186 = state_14518__$1;
(statearr_14525_17186[(2)] = null);

(statearr_14525_17186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (4))){
var inst_14501 = (state_14518[(8)]);
var inst_14501__$1 = (state_14518[(2)]);
var inst_14502 = (inst_14501__$1 == null);
var state_14518__$1 = (function (){var statearr_14532 = state_14518;
(statearr_14532[(8)] = inst_14501__$1);

return statearr_14532;
})();
if(cljs.core.truth_(inst_14502)){
var statearr_14534_17191 = state_14518__$1;
(statearr_14534_17191[(1)] = (5));

} else {
var statearr_14535_17192 = state_14518__$1;
(statearr_14535_17192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (6))){
var inst_14505 = (state_14518[(9)]);
var inst_14498 = (state_14518[(7)]);
var inst_14501 = (state_14518[(8)]);
var inst_14505__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14498,inst_14501) : f.call(null,inst_14498,inst_14501));
var inst_14506 = cljs.core.reduced_QMARK_(inst_14505__$1);
var state_14518__$1 = (function (){var statearr_14537 = state_14518;
(statearr_14537[(9)] = inst_14505__$1);

return statearr_14537;
})();
if(inst_14506){
var statearr_14538_17193 = state_14518__$1;
(statearr_14538_17193[(1)] = (8));

} else {
var statearr_14539_17194 = state_14518__$1;
(statearr_14539_17194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (3))){
var inst_14516 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14518__$1,inst_14516);
} else {
if((state_val_14519 === (2))){
var state_14518__$1 = state_14518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14518__$1,(4),ch);
} else {
if((state_val_14519 === (9))){
var inst_14505 = (state_14518[(9)]);
var inst_14498 = inst_14505;
var state_14518__$1 = (function (){var statearr_14540 = state_14518;
(statearr_14540[(7)] = inst_14498);

return statearr_14540;
})();
var statearr_14541_17196 = state_14518__$1;
(statearr_14541_17196[(2)] = null);

(statearr_14541_17196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (5))){
var inst_14498 = (state_14518[(7)]);
var state_14518__$1 = state_14518;
var statearr_14545_17203 = state_14518__$1;
(statearr_14545_17203[(2)] = inst_14498);

(statearr_14545_17203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (10))){
var inst_14512 = (state_14518[(2)]);
var state_14518__$1 = state_14518;
var statearr_14548_17204 = state_14518__$1;
(statearr_14548_17204[(2)] = inst_14512);

(statearr_14548_17204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14519 === (8))){
var inst_14505 = (state_14518[(9)]);
var inst_14508 = cljs.core.deref(inst_14505);
var state_14518__$1 = state_14518;
var statearr_14555_17217 = state_14518__$1;
(statearr_14555_17217[(2)] = inst_14508);

(statearr_14555_17217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12931__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12931__auto____0 = (function (){
var statearr_14556 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14556[(0)] = cljs$core$async$reduce_$_state_machine__12931__auto__);

(statearr_14556[(1)] = (1));

return statearr_14556;
});
var cljs$core$async$reduce_$_state_machine__12931__auto____1 = (function (state_14518){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14518);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14559){var ex__12934__auto__ = e14559;
var statearr_14560_17224 = state_14518;
(statearr_14560_17224[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14518[(4)]))){
var statearr_14562_17225 = state_14518;
(statearr_14562_17225[(1)] = cljs.core.first((state_14518[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17226 = state_14518;
state_14518 = G__17226;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12931__auto__ = function(state_14518){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12931__auto____1.call(this,state_14518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12931__auto____0;
cljs$core$async$reduce_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12931__auto____1;
return cljs$core$async$reduce_$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14566 = f__13520__auto__();
(statearr_14566[(6)] = c__13519__auto__);

return statearr_14566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

return c__13519__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14576){
var state_val_14577 = (state_14576[(1)]);
if((state_val_14577 === (1))){
var inst_14571 = cljs.core.async.reduce(f__$1,init,ch);
var state_14576__$1 = state_14576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14576__$1,(2),inst_14571);
} else {
if((state_val_14577 === (2))){
var inst_14573 = (state_14576[(2)]);
var inst_14574 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14573) : f__$1.call(null,inst_14573));
var state_14576__$1 = state_14576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14576__$1,inst_14574);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12931__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12931__auto____0 = (function (){
var statearr_14584 = [null,null,null,null,null,null,null];
(statearr_14584[(0)] = cljs$core$async$transduce_$_state_machine__12931__auto__);

(statearr_14584[(1)] = (1));

return statearr_14584;
});
var cljs$core$async$transduce_$_state_machine__12931__auto____1 = (function (state_14576){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14576);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14585){var ex__12934__auto__ = e14585;
var statearr_14587_17233 = state_14576;
(statearr_14587_17233[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14576[(4)]))){
var statearr_14588_17235 = state_14576;
(statearr_14588_17235[(1)] = cljs.core.first((state_14576[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17238 = state_14576;
state_14576 = G__17238;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12931__auto__ = function(state_14576){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12931__auto____1.call(this,state_14576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12931__auto____0;
cljs$core$async$transduce_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12931__auto____1;
return cljs$core$async$transduce_$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14590 = f__13520__auto__();
(statearr_14590[(6)] = c__13519__auto__);

return statearr_14590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

return c__13519__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14598 = arguments.length;
switch (G__14598) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14627){
var state_val_14628 = (state_14627[(1)]);
if((state_val_14628 === (7))){
var inst_14609 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14634_17250 = state_14627__$1;
(statearr_14634_17250[(2)] = inst_14609);

(statearr_14634_17250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (1))){
var inst_14602 = cljs.core.seq(coll);
var inst_14603 = inst_14602;
var state_14627__$1 = (function (){var statearr_14635 = state_14627;
(statearr_14635[(7)] = inst_14603);

return statearr_14635;
})();
var statearr_14636_17252 = state_14627__$1;
(statearr_14636_17252[(2)] = null);

(statearr_14636_17252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (4))){
var inst_14603 = (state_14627[(7)]);
var inst_14607 = cljs.core.first(inst_14603);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14627__$1,(7),ch,inst_14607);
} else {
if((state_val_14628 === (13))){
var inst_14621 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14639_17261 = state_14627__$1;
(statearr_14639_17261[(2)] = inst_14621);

(statearr_14639_17261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (6))){
var inst_14612 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
if(cljs.core.truth_(inst_14612)){
var statearr_14642_17263 = state_14627__$1;
(statearr_14642_17263[(1)] = (8));

} else {
var statearr_14646_17264 = state_14627__$1;
(statearr_14646_17264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (3))){
var inst_14625 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14627__$1,inst_14625);
} else {
if((state_val_14628 === (12))){
var state_14627__$1 = state_14627;
var statearr_14647_17270 = state_14627__$1;
(statearr_14647_17270[(2)] = null);

(statearr_14647_17270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (2))){
var inst_14603 = (state_14627[(7)]);
var state_14627__$1 = state_14627;
if(cljs.core.truth_(inst_14603)){
var statearr_14649_17271 = state_14627__$1;
(statearr_14649_17271[(1)] = (4));

} else {
var statearr_14651_17272 = state_14627__$1;
(statearr_14651_17272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (11))){
var inst_14618 = cljs.core.async.close_BANG_(ch);
var state_14627__$1 = state_14627;
var statearr_14654_17274 = state_14627__$1;
(statearr_14654_17274[(2)] = inst_14618);

(statearr_14654_17274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (9))){
var state_14627__$1 = state_14627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14656_17275 = state_14627__$1;
(statearr_14656_17275[(1)] = (11));

} else {
var statearr_14660_17276 = state_14627__$1;
(statearr_14660_17276[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (5))){
var inst_14603 = (state_14627[(7)]);
var state_14627__$1 = state_14627;
var statearr_14664_17277 = state_14627__$1;
(statearr_14664_17277[(2)] = inst_14603);

(statearr_14664_17277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (10))){
var inst_14623 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14670_17278 = state_14627__$1;
(statearr_14670_17278[(2)] = inst_14623);

(statearr_14670_17278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (8))){
var inst_14603 = (state_14627[(7)]);
var inst_14614 = cljs.core.next(inst_14603);
var inst_14603__$1 = inst_14614;
var state_14627__$1 = (function (){var statearr_14671 = state_14627;
(statearr_14671[(7)] = inst_14603__$1);

return statearr_14671;
})();
var statearr_14674_17281 = state_14627__$1;
(statearr_14674_17281[(2)] = null);

(statearr_14674_17281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_14677 = [null,null,null,null,null,null,null,null];
(statearr_14677[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_14677[(1)] = (1));

return statearr_14677;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_14627){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14627);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e14678){var ex__12934__auto__ = e14678;
var statearr_14680_17287 = state_14627;
(statearr_14680_17287[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14627[(4)]))){
var statearr_14681_17288 = state_14627;
(statearr_14681_17288[(1)] = cljs.core.first((state_14627[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17292 = state_14627;
state_14627 = G__17292;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_14686 = f__13520__auto__();
(statearr_14686[(6)] = c__13519__auto__);

return statearr_14686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

return c__13519__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14690 = arguments.length;
switch (G__14690) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17311 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17311(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17322 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17322(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17333 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17333(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17338 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17338(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14717 = (function (ch,cs,meta14718){
this.ch = ch;
this.cs = cs;
this.meta14718 = meta14718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14719,meta14718__$1){
var self__ = this;
var _14719__$1 = this;
return (new cljs.core.async.t_cljs$core$async14717(self__.ch,self__.cs,meta14718__$1));
}));

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14719){
var self__ = this;
var _14719__$1 = this;
return self__.meta14718;
}));

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14718","meta14718",2030725129,null)], null);
}));

(cljs.core.async.t_cljs$core$async14717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14717");

(cljs.core.async.t_cljs$core$async14717.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14717.
 */
cljs.core.async.__GT_t_cljs$core$async14717 = (function cljs$core$async$__GT_t_cljs$core$async14717(ch,cs,meta14718){
return (new cljs.core.async.t_cljs$core$async14717(ch,cs,meta14718));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14717(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13519__auto___17359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_14881){
var state_val_14882 = (state_14881[(1)]);
if((state_val_14882 === (7))){
var inst_14877 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14883_17360 = state_14881__$1;
(statearr_14883_17360[(2)] = inst_14877);

(statearr_14883_17360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (20))){
var inst_14775 = (state_14881[(7)]);
var inst_14789 = cljs.core.first(inst_14775);
var inst_14790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14789,(0),null);
var inst_14791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14789,(1),null);
var state_14881__$1 = (function (){var statearr_14888 = state_14881;
(statearr_14888[(8)] = inst_14790);

return statearr_14888;
})();
if(cljs.core.truth_(inst_14791)){
var statearr_14890_17364 = state_14881__$1;
(statearr_14890_17364[(1)] = (22));

} else {
var statearr_14891_17365 = state_14881__$1;
(statearr_14891_17365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (27))){
var inst_14819 = (state_14881[(9)]);
var inst_14826 = (state_14881[(10)]);
var inst_14821 = (state_14881[(11)]);
var inst_14739 = (state_14881[(12)]);
var inst_14826__$1 = cljs.core._nth(inst_14819,inst_14821);
var inst_14827 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14826__$1,inst_14739,done);
var state_14881__$1 = (function (){var statearr_14893 = state_14881;
(statearr_14893[(10)] = inst_14826__$1);

return statearr_14893;
})();
if(cljs.core.truth_(inst_14827)){
var statearr_14894_17369 = state_14881__$1;
(statearr_14894_17369[(1)] = (30));

} else {
var statearr_14898_17370 = state_14881__$1;
(statearr_14898_17370[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (1))){
var state_14881__$1 = state_14881;
var statearr_14899_17372 = state_14881__$1;
(statearr_14899_17372[(2)] = null);

(statearr_14899_17372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (24))){
var inst_14775 = (state_14881[(7)]);
var inst_14796 = (state_14881[(2)]);
var inst_14797 = cljs.core.next(inst_14775);
var inst_14749 = inst_14797;
var inst_14750 = null;
var inst_14751 = (0);
var inst_14752 = (0);
var state_14881__$1 = (function (){var statearr_14904 = state_14881;
(statearr_14904[(13)] = inst_14750);

(statearr_14904[(14)] = inst_14749);

(statearr_14904[(15)] = inst_14796);

(statearr_14904[(16)] = inst_14751);

(statearr_14904[(17)] = inst_14752);

return statearr_14904;
})();
var statearr_14905_17374 = state_14881__$1;
(statearr_14905_17374[(2)] = null);

(statearr_14905_17374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (39))){
var state_14881__$1 = state_14881;
var statearr_14909_17375 = state_14881__$1;
(statearr_14909_17375[(2)] = null);

(statearr_14909_17375[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (4))){
var inst_14739 = (state_14881[(12)]);
var inst_14739__$1 = (state_14881[(2)]);
var inst_14740 = (inst_14739__$1 == null);
var state_14881__$1 = (function (){var statearr_14910 = state_14881;
(statearr_14910[(12)] = inst_14739__$1);

return statearr_14910;
})();
if(cljs.core.truth_(inst_14740)){
var statearr_14913_17376 = state_14881__$1;
(statearr_14913_17376[(1)] = (5));

} else {
var statearr_14915_17377 = state_14881__$1;
(statearr_14915_17377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (15))){
var inst_14750 = (state_14881[(13)]);
var inst_14749 = (state_14881[(14)]);
var inst_14751 = (state_14881[(16)]);
var inst_14752 = (state_14881[(17)]);
var inst_14771 = (state_14881[(2)]);
var inst_14772 = (inst_14752 + (1));
var tmp14906 = inst_14750;
var tmp14907 = inst_14749;
var tmp14908 = inst_14751;
var inst_14749__$1 = tmp14907;
var inst_14750__$1 = tmp14906;
var inst_14751__$1 = tmp14908;
var inst_14752__$1 = inst_14772;
var state_14881__$1 = (function (){var statearr_14917 = state_14881;
(statearr_14917[(18)] = inst_14771);

(statearr_14917[(13)] = inst_14750__$1);

(statearr_14917[(14)] = inst_14749__$1);

(statearr_14917[(16)] = inst_14751__$1);

(statearr_14917[(17)] = inst_14752__$1);

return statearr_14917;
})();
var statearr_14919_17387 = state_14881__$1;
(statearr_14919_17387[(2)] = null);

(statearr_14919_17387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (21))){
var inst_14800 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14927_17389 = state_14881__$1;
(statearr_14927_17389[(2)] = inst_14800);

(statearr_14927_17389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (31))){
var inst_14826 = (state_14881[(10)]);
var inst_14830 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14826);
var state_14881__$1 = state_14881;
var statearr_14928_17391 = state_14881__$1;
(statearr_14928_17391[(2)] = inst_14830);

(statearr_14928_17391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (32))){
var inst_14820 = (state_14881[(19)]);
var inst_14819 = (state_14881[(9)]);
var inst_14821 = (state_14881[(11)]);
var inst_14818 = (state_14881[(20)]);
var inst_14832 = (state_14881[(2)]);
var inst_14833 = (inst_14821 + (1));
var tmp14922 = inst_14820;
var tmp14923 = inst_14819;
var tmp14924 = inst_14818;
var inst_14818__$1 = tmp14924;
var inst_14819__$1 = tmp14923;
var inst_14820__$1 = tmp14922;
var inst_14821__$1 = inst_14833;
var state_14881__$1 = (function (){var statearr_14932 = state_14881;
(statearr_14932[(19)] = inst_14820__$1);

(statearr_14932[(9)] = inst_14819__$1);

(statearr_14932[(11)] = inst_14821__$1);

(statearr_14932[(21)] = inst_14832);

(statearr_14932[(20)] = inst_14818__$1);

return statearr_14932;
})();
var statearr_14933_17392 = state_14881__$1;
(statearr_14933_17392[(2)] = null);

(statearr_14933_17392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (40))){
var inst_14847 = (state_14881[(22)]);
var inst_14851 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14847);
var state_14881__$1 = state_14881;
var statearr_14939_17393 = state_14881__$1;
(statearr_14939_17393[(2)] = inst_14851);

(statearr_14939_17393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (33))){
var inst_14836 = (state_14881[(23)]);
var inst_14838 = cljs.core.chunked_seq_QMARK_(inst_14836);
var state_14881__$1 = state_14881;
if(inst_14838){
var statearr_14941_17394 = state_14881__$1;
(statearr_14941_17394[(1)] = (36));

} else {
var statearr_14942_17395 = state_14881__$1;
(statearr_14942_17395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (13))){
var inst_14764 = (state_14881[(24)]);
var inst_14768 = cljs.core.async.close_BANG_(inst_14764);
var state_14881__$1 = state_14881;
var statearr_14944_17397 = state_14881__$1;
(statearr_14944_17397[(2)] = inst_14768);

(statearr_14944_17397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (22))){
var inst_14790 = (state_14881[(8)]);
var inst_14793 = cljs.core.async.close_BANG_(inst_14790);
var state_14881__$1 = state_14881;
var statearr_14945_17398 = state_14881__$1;
(statearr_14945_17398[(2)] = inst_14793);

(statearr_14945_17398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (36))){
var inst_14836 = (state_14881[(23)]);
var inst_14842 = cljs.core.chunk_first(inst_14836);
var inst_14843 = cljs.core.chunk_rest(inst_14836);
var inst_14844 = cljs.core.count(inst_14842);
var inst_14818 = inst_14843;
var inst_14819 = inst_14842;
var inst_14820 = inst_14844;
var inst_14821 = (0);
var state_14881__$1 = (function (){var statearr_14948 = state_14881;
(statearr_14948[(19)] = inst_14820);

(statearr_14948[(9)] = inst_14819);

(statearr_14948[(11)] = inst_14821);

(statearr_14948[(20)] = inst_14818);

return statearr_14948;
})();
var statearr_14949_17399 = state_14881__$1;
(statearr_14949_17399[(2)] = null);

(statearr_14949_17399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (41))){
var inst_14836 = (state_14881[(23)]);
var inst_14853 = (state_14881[(2)]);
var inst_14854 = cljs.core.next(inst_14836);
var inst_14818 = inst_14854;
var inst_14819 = null;
var inst_14820 = (0);
var inst_14821 = (0);
var state_14881__$1 = (function (){var statearr_14956 = state_14881;
(statearr_14956[(19)] = inst_14820);

(statearr_14956[(9)] = inst_14819);

(statearr_14956[(25)] = inst_14853);

(statearr_14956[(11)] = inst_14821);

(statearr_14956[(20)] = inst_14818);

return statearr_14956;
})();
var statearr_14960_17409 = state_14881__$1;
(statearr_14960_17409[(2)] = null);

(statearr_14960_17409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (43))){
var state_14881__$1 = state_14881;
var statearr_14962_17410 = state_14881__$1;
(statearr_14962_17410[(2)] = null);

(statearr_14962_17410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (29))){
var inst_14864 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14963_17412 = state_14881__$1;
(statearr_14963_17412[(2)] = inst_14864);

(statearr_14963_17412[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (44))){
var inst_14874 = (state_14881[(2)]);
var state_14881__$1 = (function (){var statearr_14964 = state_14881;
(statearr_14964[(26)] = inst_14874);

return statearr_14964;
})();
var statearr_14965_17413 = state_14881__$1;
(statearr_14965_17413[(2)] = null);

(statearr_14965_17413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (6))){
var inst_14810 = (state_14881[(27)]);
var inst_14809 = cljs.core.deref(cs);
var inst_14810__$1 = cljs.core.keys(inst_14809);
var inst_14811 = cljs.core.count(inst_14810__$1);
var inst_14812 = cljs.core.reset_BANG_(dctr,inst_14811);
var inst_14817 = cljs.core.seq(inst_14810__$1);
var inst_14818 = inst_14817;
var inst_14819 = null;
var inst_14820 = (0);
var inst_14821 = (0);
var state_14881__$1 = (function (){var statearr_14966 = state_14881;
(statearr_14966[(19)] = inst_14820);

(statearr_14966[(9)] = inst_14819);

(statearr_14966[(28)] = inst_14812);

(statearr_14966[(27)] = inst_14810__$1);

(statearr_14966[(11)] = inst_14821);

(statearr_14966[(20)] = inst_14818);

return statearr_14966;
})();
var statearr_14968_17417 = state_14881__$1;
(statearr_14968_17417[(2)] = null);

(statearr_14968_17417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (28))){
var inst_14836 = (state_14881[(23)]);
var inst_14818 = (state_14881[(20)]);
var inst_14836__$1 = cljs.core.seq(inst_14818);
var state_14881__$1 = (function (){var statearr_14969 = state_14881;
(statearr_14969[(23)] = inst_14836__$1);

return statearr_14969;
})();
if(inst_14836__$1){
var statearr_14970_17418 = state_14881__$1;
(statearr_14970_17418[(1)] = (33));

} else {
var statearr_14971_17419 = state_14881__$1;
(statearr_14971_17419[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (25))){
var inst_14820 = (state_14881[(19)]);
var inst_14821 = (state_14881[(11)]);
var inst_14823 = (inst_14821 < inst_14820);
var inst_14824 = inst_14823;
var state_14881__$1 = state_14881;
if(cljs.core.truth_(inst_14824)){
var statearr_14972_17420 = state_14881__$1;
(statearr_14972_17420[(1)] = (27));

} else {
var statearr_14973_17421 = state_14881__$1;
(statearr_14973_17421[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (34))){
var state_14881__$1 = state_14881;
var statearr_14974_17422 = state_14881__$1;
(statearr_14974_17422[(2)] = null);

(statearr_14974_17422[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (17))){
var state_14881__$1 = state_14881;
var statearr_14978_17423 = state_14881__$1;
(statearr_14978_17423[(2)] = null);

(statearr_14978_17423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (3))){
var inst_14879 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14881__$1,inst_14879);
} else {
if((state_val_14882 === (12))){
var inst_14805 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14981_17424 = state_14881__$1;
(statearr_14981_17424[(2)] = inst_14805);

(statearr_14981_17424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (2))){
var state_14881__$1 = state_14881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14881__$1,(4),ch);
} else {
if((state_val_14882 === (23))){
var state_14881__$1 = state_14881;
var statearr_14990_17425 = state_14881__$1;
(statearr_14990_17425[(2)] = null);

(statearr_14990_17425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (35))){
var inst_14860 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_14992_17426 = state_14881__$1;
(statearr_14992_17426[(2)] = inst_14860);

(statearr_14992_17426[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (19))){
var inst_14775 = (state_14881[(7)]);
var inst_14779 = cljs.core.chunk_first(inst_14775);
var inst_14780 = cljs.core.chunk_rest(inst_14775);
var inst_14781 = cljs.core.count(inst_14779);
var inst_14749 = inst_14780;
var inst_14750 = inst_14779;
var inst_14751 = inst_14781;
var inst_14752 = (0);
var state_14881__$1 = (function (){var statearr_14997 = state_14881;
(statearr_14997[(13)] = inst_14750);

(statearr_14997[(14)] = inst_14749);

(statearr_14997[(16)] = inst_14751);

(statearr_14997[(17)] = inst_14752);

return statearr_14997;
})();
var statearr_14999_17427 = state_14881__$1;
(statearr_14999_17427[(2)] = null);

(statearr_14999_17427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (11))){
var inst_14749 = (state_14881[(14)]);
var inst_14775 = (state_14881[(7)]);
var inst_14775__$1 = cljs.core.seq(inst_14749);
var state_14881__$1 = (function (){var statearr_15003 = state_14881;
(statearr_15003[(7)] = inst_14775__$1);

return statearr_15003;
})();
if(inst_14775__$1){
var statearr_15004_17429 = state_14881__$1;
(statearr_15004_17429[(1)] = (16));

} else {
var statearr_15007_17430 = state_14881__$1;
(statearr_15007_17430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (9))){
var inst_14807 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_15009_17431 = state_14881__$1;
(statearr_15009_17431[(2)] = inst_14807);

(statearr_15009_17431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (5))){
var inst_14747 = cljs.core.deref(cs);
var inst_14748 = cljs.core.seq(inst_14747);
var inst_14749 = inst_14748;
var inst_14750 = null;
var inst_14751 = (0);
var inst_14752 = (0);
var state_14881__$1 = (function (){var statearr_15011 = state_14881;
(statearr_15011[(13)] = inst_14750);

(statearr_15011[(14)] = inst_14749);

(statearr_15011[(16)] = inst_14751);

(statearr_15011[(17)] = inst_14752);

return statearr_15011;
})();
var statearr_15014_17437 = state_14881__$1;
(statearr_15014_17437[(2)] = null);

(statearr_15014_17437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (14))){
var state_14881__$1 = state_14881;
var statearr_15016_17438 = state_14881__$1;
(statearr_15016_17438[(2)] = null);

(statearr_15016_17438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (45))){
var inst_14871 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_15018_17439 = state_14881__$1;
(statearr_15018_17439[(2)] = inst_14871);

(statearr_15018_17439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (26))){
var inst_14810 = (state_14881[(27)]);
var inst_14866 = (state_14881[(2)]);
var inst_14868 = cljs.core.seq(inst_14810);
var state_14881__$1 = (function (){var statearr_15022 = state_14881;
(statearr_15022[(29)] = inst_14866);

return statearr_15022;
})();
if(inst_14868){
var statearr_15023_17443 = state_14881__$1;
(statearr_15023_17443[(1)] = (42));

} else {
var statearr_15024_17444 = state_14881__$1;
(statearr_15024_17444[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (16))){
var inst_14775 = (state_14881[(7)]);
var inst_14777 = cljs.core.chunked_seq_QMARK_(inst_14775);
var state_14881__$1 = state_14881;
if(inst_14777){
var statearr_15027_17446 = state_14881__$1;
(statearr_15027_17446[(1)] = (19));

} else {
var statearr_15029_17447 = state_14881__$1;
(statearr_15029_17447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (38))){
var inst_14857 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_15032_17448 = state_14881__$1;
(statearr_15032_17448[(2)] = inst_14857);

(statearr_15032_17448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (30))){
var state_14881__$1 = state_14881;
var statearr_15034_17453 = state_14881__$1;
(statearr_15034_17453[(2)] = null);

(statearr_15034_17453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (10))){
var inst_14750 = (state_14881[(13)]);
var inst_14752 = (state_14881[(17)]);
var inst_14763 = cljs.core._nth(inst_14750,inst_14752);
var inst_14764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14763,(0),null);
var inst_14765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14763,(1),null);
var state_14881__$1 = (function (){var statearr_15038 = state_14881;
(statearr_15038[(24)] = inst_14764);

return statearr_15038;
})();
if(cljs.core.truth_(inst_14765)){
var statearr_15041_17460 = state_14881__$1;
(statearr_15041_17460[(1)] = (13));

} else {
var statearr_15045_17461 = state_14881__$1;
(statearr_15045_17461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (18))){
var inst_14803 = (state_14881[(2)]);
var state_14881__$1 = state_14881;
var statearr_15048_17462 = state_14881__$1;
(statearr_15048_17462[(2)] = inst_14803);

(statearr_15048_17462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (42))){
var state_14881__$1 = state_14881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14881__$1,(45),dchan);
} else {
if((state_val_14882 === (37))){
var inst_14847 = (state_14881[(22)]);
var inst_14836 = (state_14881[(23)]);
var inst_14739 = (state_14881[(12)]);
var inst_14847__$1 = cljs.core.first(inst_14836);
var inst_14848 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14847__$1,inst_14739,done);
var state_14881__$1 = (function (){var statearr_15055 = state_14881;
(statearr_15055[(22)] = inst_14847__$1);

return statearr_15055;
})();
if(cljs.core.truth_(inst_14848)){
var statearr_15056_17463 = state_14881__$1;
(statearr_15056_17463[(1)] = (39));

} else {
var statearr_15057_17464 = state_14881__$1;
(statearr_15057_17464[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14882 === (8))){
var inst_14751 = (state_14881[(16)]);
var inst_14752 = (state_14881[(17)]);
var inst_14757 = (inst_14752 < inst_14751);
var inst_14758 = inst_14757;
var state_14881__$1 = state_14881;
if(cljs.core.truth_(inst_14758)){
var statearr_15060_17465 = state_14881__$1;
(statearr_15060_17465[(1)] = (10));

} else {
var statearr_15061_17466 = state_14881__$1;
(statearr_15061_17466[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12931__auto__ = null;
var cljs$core$async$mult_$_state_machine__12931__auto____0 = (function (){
var statearr_15069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15069[(0)] = cljs$core$async$mult_$_state_machine__12931__auto__);

(statearr_15069[(1)] = (1));

return statearr_15069;
});
var cljs$core$async$mult_$_state_machine__12931__auto____1 = (function (state_14881){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_14881);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e15071){var ex__12934__auto__ = e15071;
var statearr_15072_17469 = state_14881;
(statearr_15072_17469[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_14881[(4)]))){
var statearr_15073_17470 = state_14881;
(statearr_15073_17470[(1)] = cljs.core.first((state_14881[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17471 = state_14881;
state_14881 = G__17471;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12931__auto__ = function(state_14881){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12931__auto____1.call(this,state_14881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12931__auto____0;
cljs$core$async$mult_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12931__auto____1;
return cljs$core$async$mult_$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_15077 = f__13520__auto__();
(statearr_15077[(6)] = c__13519__auto___17359);

return statearr_15077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15083 = arguments.length;
switch (G__15083) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17475 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17475(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17481 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17481(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17484 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17484(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17486 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17486(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17489 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17489(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17495 = arguments.length;
var i__5770__auto___17496 = (0);
while(true){
if((i__5770__auto___17496 < len__5769__auto___17495)){
args__5775__auto__.push((arguments[i__5770__auto___17496]));

var G__17501 = (i__5770__auto___17496 + (1));
i__5770__auto___17496 = G__17501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15162){
var map__15163 = p__15162;
var map__15163__$1 = cljs.core.__destructure_map(map__15163);
var opts = map__15163__$1;
var statearr_15164_17503 = state;
(statearr_15164_17503[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15166_17504 = state;
(statearr_15166_17504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15170_17505 = state;
(statearr_15170_17505[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15149){
var G__15150 = cljs.core.first(seq15149);
var seq15149__$1 = cljs.core.next(seq15149);
var G__15151 = cljs.core.first(seq15149__$1);
var seq15149__$2 = cljs.core.next(seq15149__$1);
var G__15152 = cljs.core.first(seq15149__$2);
var seq15149__$3 = cljs.core.next(seq15149__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15150,G__15151,G__15152,seq15149__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15197 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15198){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15198 = meta15198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15199,meta15198__$1){
var self__ = this;
var _15199__$1 = this;
return (new cljs.core.async.t_cljs$core$async15197(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15198__$1));
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15199){
var self__ = this;
var _15199__$1 = this;
return self__.meta15198;
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15197.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15198","meta15198",1488545114,null)], null);
}));

(cljs.core.async.t_cljs$core$async15197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15197");

(cljs.core.async.t_cljs$core$async15197.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15197.
 */
cljs.core.async.__GT_t_cljs$core$async15197 = (function cljs$core$async$__GT_t_cljs$core$async15197(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15198){
return (new cljs.core.async.t_cljs$core$async15197(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15198));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15197(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13519__auto___17520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_15312){
var state_val_15313 = (state_15312[(1)]);
if((state_val_15313 === (7))){
var inst_15266 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15266)){
var statearr_15318_17525 = state_15312__$1;
(statearr_15318_17525[(1)] = (8));

} else {
var statearr_15320_17527 = state_15312__$1;
(statearr_15320_17527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (20))){
var inst_15258 = (state_15312[(7)]);
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15312__$1,(23),out,inst_15258);
} else {
if((state_val_15313 === (1))){
var inst_15237 = calc_state();
var inst_15239 = cljs.core.__destructure_map(inst_15237);
var inst_15240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15239,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15239,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15239,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15243 = inst_15237;
var state_15312__$1 = (function (){var statearr_15324 = state_15312;
(statearr_15324[(8)] = inst_15241);

(statearr_15324[(9)] = inst_15240);

(statearr_15324[(10)] = inst_15243);

(statearr_15324[(11)] = inst_15242);

return statearr_15324;
})();
var statearr_15326_17531 = state_15312__$1;
(statearr_15326_17531[(2)] = null);

(statearr_15326_17531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (24))){
var inst_15247 = (state_15312[(12)]);
var inst_15243 = inst_15247;
var state_15312__$1 = (function (){var statearr_15329 = state_15312;
(statearr_15329[(10)] = inst_15243);

return statearr_15329;
})();
var statearr_15331_17541 = state_15312__$1;
(statearr_15331_17541[(2)] = null);

(statearr_15331_17541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (4))){
var inst_15258 = (state_15312[(7)]);
var inst_15261 = (state_15312[(13)]);
var inst_15256 = (state_15312[(2)]);
var inst_15258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15256,(0),null);
var inst_15259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15256,(1),null);
var inst_15261__$1 = (inst_15258__$1 == null);
var state_15312__$1 = (function (){var statearr_15333 = state_15312;
(statearr_15333[(14)] = inst_15259);

(statearr_15333[(7)] = inst_15258__$1);

(statearr_15333[(13)] = inst_15261__$1);

return statearr_15333;
})();
if(cljs.core.truth_(inst_15261__$1)){
var statearr_15337_17565 = state_15312__$1;
(statearr_15337_17565[(1)] = (5));

} else {
var statearr_15338_17566 = state_15312__$1;
(statearr_15338_17566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (15))){
var inst_15282 = (state_15312[(15)]);
var inst_15248 = (state_15312[(16)]);
var inst_15282__$1 = cljs.core.empty_QMARK_(inst_15248);
var state_15312__$1 = (function (){var statearr_15340 = state_15312;
(statearr_15340[(15)] = inst_15282__$1);

return statearr_15340;
})();
if(inst_15282__$1){
var statearr_15341_17567 = state_15312__$1;
(statearr_15341_17567[(1)] = (17));

} else {
var statearr_15344_17568 = state_15312__$1;
(statearr_15344_17568[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (21))){
var inst_15247 = (state_15312[(12)]);
var inst_15243 = inst_15247;
var state_15312__$1 = (function (){var statearr_15347 = state_15312;
(statearr_15347[(10)] = inst_15243);

return statearr_15347;
})();
var statearr_15348_17569 = state_15312__$1;
(statearr_15348_17569[(2)] = null);

(statearr_15348_17569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (13))){
var inst_15273 = (state_15312[(2)]);
var inst_15274 = calc_state();
var inst_15243 = inst_15274;
var state_15312__$1 = (function (){var statearr_15351 = state_15312;
(statearr_15351[(17)] = inst_15273);

(statearr_15351[(10)] = inst_15243);

return statearr_15351;
})();
var statearr_15355_17576 = state_15312__$1;
(statearr_15355_17576[(2)] = null);

(statearr_15355_17576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (22))){
var inst_15306 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15357_17577 = state_15312__$1;
(statearr_15357_17577[(2)] = inst_15306);

(statearr_15357_17577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (6))){
var inst_15259 = (state_15312[(14)]);
var inst_15264 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15259,change);
var state_15312__$1 = state_15312;
var statearr_15359_17585 = state_15312__$1;
(statearr_15359_17585[(2)] = inst_15264);

(statearr_15359_17585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (25))){
var state_15312__$1 = state_15312;
var statearr_15365_17589 = state_15312__$1;
(statearr_15365_17589[(2)] = null);

(statearr_15365_17589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (17))){
var inst_15259 = (state_15312[(14)]);
var inst_15249 = (state_15312[(18)]);
var inst_15285 = (inst_15249.cljs$core$IFn$_invoke$arity$1 ? inst_15249.cljs$core$IFn$_invoke$arity$1(inst_15259) : inst_15249.call(null,inst_15259));
var inst_15286 = cljs.core.not(inst_15285);
var state_15312__$1 = state_15312;
var statearr_15372_17594 = state_15312__$1;
(statearr_15372_17594[(2)] = inst_15286);

(statearr_15372_17594[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (3))){
var inst_15310 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15312__$1,inst_15310);
} else {
if((state_val_15313 === (12))){
var state_15312__$1 = state_15312;
var statearr_15381_17596 = state_15312__$1;
(statearr_15381_17596[(2)] = null);

(statearr_15381_17596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (2))){
var inst_15247 = (state_15312[(12)]);
var inst_15243 = (state_15312[(10)]);
var inst_15247__$1 = cljs.core.__destructure_map(inst_15243);
var inst_15248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15247__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15247__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15247__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15312__$1 = (function (){var statearr_15388 = state_15312;
(statearr_15388[(16)] = inst_15248);

(statearr_15388[(18)] = inst_15249);

(statearr_15388[(12)] = inst_15247__$1);

return statearr_15388;
})();
return cljs.core.async.ioc_alts_BANG_(state_15312__$1,(4),inst_15250);
} else {
if((state_val_15313 === (23))){
var inst_15296 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15296)){
var statearr_15394_17606 = state_15312__$1;
(statearr_15394_17606[(1)] = (24));

} else {
var statearr_15396_17607 = state_15312__$1;
(statearr_15396_17607[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (19))){
var inst_15289 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15403_17608 = state_15312__$1;
(statearr_15403_17608[(2)] = inst_15289);

(statearr_15403_17608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (11))){
var inst_15259 = (state_15312[(14)]);
var inst_15270 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15259);
var state_15312__$1 = state_15312;
var statearr_15404_17610 = state_15312__$1;
(statearr_15404_17610[(2)] = inst_15270);

(statearr_15404_17610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (9))){
var inst_15248 = (state_15312[(16)]);
var inst_15259 = (state_15312[(14)]);
var inst_15279 = (state_15312[(19)]);
var inst_15279__$1 = (inst_15248.cljs$core$IFn$_invoke$arity$1 ? inst_15248.cljs$core$IFn$_invoke$arity$1(inst_15259) : inst_15248.call(null,inst_15259));
var state_15312__$1 = (function (){var statearr_15409 = state_15312;
(statearr_15409[(19)] = inst_15279__$1);

return statearr_15409;
})();
if(cljs.core.truth_(inst_15279__$1)){
var statearr_15411_17617 = state_15312__$1;
(statearr_15411_17617[(1)] = (14));

} else {
var statearr_15412_17619 = state_15312__$1;
(statearr_15412_17619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (5))){
var inst_15261 = (state_15312[(13)]);
var state_15312__$1 = state_15312;
var statearr_15416_17620 = state_15312__$1;
(statearr_15416_17620[(2)] = inst_15261);

(statearr_15416_17620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (14))){
var inst_15279 = (state_15312[(19)]);
var state_15312__$1 = state_15312;
var statearr_15419_17625 = state_15312__$1;
(statearr_15419_17625[(2)] = inst_15279);

(statearr_15419_17625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (26))){
var inst_15301 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15420_17626 = state_15312__$1;
(statearr_15420_17626[(2)] = inst_15301);

(statearr_15420_17626[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (16))){
var inst_15291 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15291)){
var statearr_15424_17628 = state_15312__$1;
(statearr_15424_17628[(1)] = (20));

} else {
var statearr_15425_17629 = state_15312__$1;
(statearr_15425_17629[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (10))){
var inst_15308 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15427_17632 = state_15312__$1;
(statearr_15427_17632[(2)] = inst_15308);

(statearr_15427_17632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (18))){
var inst_15282 = (state_15312[(15)]);
var state_15312__$1 = state_15312;
var statearr_15428_17635 = state_15312__$1;
(statearr_15428_17635[(2)] = inst_15282);

(statearr_15428_17635[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (8))){
var inst_15258 = (state_15312[(7)]);
var inst_15268 = (inst_15258 == null);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15268)){
var statearr_15429_17637 = state_15312__$1;
(statearr_15429_17637[(1)] = (11));

} else {
var statearr_15430_17638 = state_15312__$1;
(statearr_15430_17638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12931__auto__ = null;
var cljs$core$async$mix_$_state_machine__12931__auto____0 = (function (){
var statearr_15432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15432[(0)] = cljs$core$async$mix_$_state_machine__12931__auto__);

(statearr_15432[(1)] = (1));

return statearr_15432;
});
var cljs$core$async$mix_$_state_machine__12931__auto____1 = (function (state_15312){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_15312);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e15434){var ex__12934__auto__ = e15434;
var statearr_15435_17639 = state_15312;
(statearr_15435_17639[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_15312[(4)]))){
var statearr_15436_17640 = state_15312;
(statearr_15436_17640[(1)] = cljs.core.first((state_15312[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17644 = state_15312;
state_15312 = G__17644;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12931__auto__ = function(state_15312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12931__auto____1.call(this,state_15312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12931__auto____0;
cljs$core$async$mix_$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12931__auto____1;
return cljs$core$async$mix_$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_15445 = f__13520__auto__();
(statearr_15445[(6)] = c__13519__auto___17520);

return statearr_15445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17650 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17650(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17655 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17655(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17657 = (function() {
var G__17658 = null;
var G__17658__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17658__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17658 = function(p,v){
switch(arguments.length){
case 1:
return G__17658__1.call(this,p);
case 2:
return G__17658__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17658.cljs$core$IFn$_invoke$arity$1 = G__17658__1;
G__17658.cljs$core$IFn$_invoke$arity$2 = G__17658__2;
return G__17658;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15495 = arguments.length;
switch (G__15495) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17657(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17657(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15521 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15522){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15522 = meta15522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15523,meta15522__$1){
var self__ = this;
var _15523__$1 = this;
return (new cljs.core.async.t_cljs$core$async15521(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15522__$1));
}));

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15523){
var self__ = this;
var _15523__$1 = this;
return self__.meta15522;
}));

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15522","meta15522",1470617516,null)], null);
}));

(cljs.core.async.t_cljs$core$async15521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15521");

(cljs.core.async.t_cljs$core$async15521.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15521.
 */
cljs.core.async.__GT_t_cljs$core$async15521 = (function cljs$core$async$__GT_t_cljs$core$async15521(ch,topic_fn,buf_fn,mults,ensure_mult,meta15522){
return (new cljs.core.async.t_cljs$core$async15521(ch,topic_fn,buf_fn,mults,ensure_mult,meta15522));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15511 = arguments.length;
switch (G__15511) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15497_SHARP_){
if(cljs.core.truth_((p1__15497_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15497_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15497_SHARP_.call(null,topic)))){
return p1__15497_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15497_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15521(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13519__auto___17687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_15614){
var state_val_15615 = (state_15614[(1)]);
if((state_val_15615 === (7))){
var inst_15610 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
var statearr_15618_17689 = state_15614__$1;
(statearr_15618_17689[(2)] = inst_15610);

(statearr_15618_17689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (20))){
var state_15614__$1 = state_15614;
var statearr_15619_17690 = state_15614__$1;
(statearr_15619_17690[(2)] = null);

(statearr_15619_17690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (1))){
var state_15614__$1 = state_15614;
var statearr_15620_17691 = state_15614__$1;
(statearr_15620_17691[(2)] = null);

(statearr_15620_17691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (24))){
var inst_15593 = (state_15614[(7)]);
var inst_15602 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15593);
var state_15614__$1 = state_15614;
var statearr_15621_17692 = state_15614__$1;
(statearr_15621_17692[(2)] = inst_15602);

(statearr_15621_17692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (4))){
var inst_15537 = (state_15614[(8)]);
var inst_15537__$1 = (state_15614[(2)]);
var inst_15541 = (inst_15537__$1 == null);
var state_15614__$1 = (function (){var statearr_15622 = state_15614;
(statearr_15622[(8)] = inst_15537__$1);

return statearr_15622;
})();
if(cljs.core.truth_(inst_15541)){
var statearr_15623_17693 = state_15614__$1;
(statearr_15623_17693[(1)] = (5));

} else {
var statearr_15624_17694 = state_15614__$1;
(statearr_15624_17694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (15))){
var inst_15586 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
var statearr_15625_17696 = state_15614__$1;
(statearr_15625_17696[(2)] = inst_15586);

(statearr_15625_17696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (21))){
var inst_15607 = (state_15614[(2)]);
var state_15614__$1 = (function (){var statearr_15626 = state_15614;
(statearr_15626[(9)] = inst_15607);

return statearr_15626;
})();
var statearr_15627_17697 = state_15614__$1;
(statearr_15627_17697[(2)] = null);

(statearr_15627_17697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (13))){
var inst_15565 = (state_15614[(10)]);
var inst_15567 = cljs.core.chunked_seq_QMARK_(inst_15565);
var state_15614__$1 = state_15614;
if(inst_15567){
var statearr_15628_17698 = state_15614__$1;
(statearr_15628_17698[(1)] = (16));

} else {
var statearr_15629_17699 = state_15614__$1;
(statearr_15629_17699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (22))){
var inst_15599 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
if(cljs.core.truth_(inst_15599)){
var statearr_15630_17702 = state_15614__$1;
(statearr_15630_17702[(1)] = (23));

} else {
var statearr_15631_17706 = state_15614__$1;
(statearr_15631_17706[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (6))){
var inst_15593 = (state_15614[(7)]);
var inst_15595 = (state_15614[(11)]);
var inst_15537 = (state_15614[(8)]);
var inst_15593__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15537) : topic_fn.call(null,inst_15537));
var inst_15594 = cljs.core.deref(mults);
var inst_15595__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15594,inst_15593__$1);
var state_15614__$1 = (function (){var statearr_15633 = state_15614;
(statearr_15633[(7)] = inst_15593__$1);

(statearr_15633[(11)] = inst_15595__$1);

return statearr_15633;
})();
if(cljs.core.truth_(inst_15595__$1)){
var statearr_15634_17712 = state_15614__$1;
(statearr_15634_17712[(1)] = (19));

} else {
var statearr_15635_17713 = state_15614__$1;
(statearr_15635_17713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (25))){
var inst_15604 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
var statearr_15636_17719 = state_15614__$1;
(statearr_15636_17719[(2)] = inst_15604);

(statearr_15636_17719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (17))){
var inst_15565 = (state_15614[(10)]);
var inst_15575 = cljs.core.first(inst_15565);
var inst_15576 = cljs.core.async.muxch_STAR_(inst_15575);
var inst_15577 = cljs.core.async.close_BANG_(inst_15576);
var inst_15578 = cljs.core.next(inst_15565);
var inst_15550 = inst_15578;
var inst_15551 = null;
var inst_15552 = (0);
var inst_15553 = (0);
var state_15614__$1 = (function (){var statearr_15641 = state_15614;
(statearr_15641[(12)] = inst_15577);

(statearr_15641[(13)] = inst_15551);

(statearr_15641[(14)] = inst_15550);

(statearr_15641[(15)] = inst_15553);

(statearr_15641[(16)] = inst_15552);

return statearr_15641;
})();
var statearr_15643_17731 = state_15614__$1;
(statearr_15643_17731[(2)] = null);

(statearr_15643_17731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (3))){
var inst_15612 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15614__$1,inst_15612);
} else {
if((state_val_15615 === (12))){
var inst_15589 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
var statearr_15644_17734 = state_15614__$1;
(statearr_15644_17734[(2)] = inst_15589);

(statearr_15644_17734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (2))){
var state_15614__$1 = state_15614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15614__$1,(4),ch);
} else {
if((state_val_15615 === (23))){
var state_15614__$1 = state_15614;
var statearr_15645_17736 = state_15614__$1;
(statearr_15645_17736[(2)] = null);

(statearr_15645_17736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (19))){
var inst_15595 = (state_15614[(11)]);
var inst_15537 = (state_15614[(8)]);
var inst_15597 = cljs.core.async.muxch_STAR_(inst_15595);
var state_15614__$1 = state_15614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15614__$1,(22),inst_15597,inst_15537);
} else {
if((state_val_15615 === (11))){
var inst_15565 = (state_15614[(10)]);
var inst_15550 = (state_15614[(14)]);
var inst_15565__$1 = cljs.core.seq(inst_15550);
var state_15614__$1 = (function (){var statearr_15646 = state_15614;
(statearr_15646[(10)] = inst_15565__$1);

return statearr_15646;
})();
if(inst_15565__$1){
var statearr_15649_17741 = state_15614__$1;
(statearr_15649_17741[(1)] = (13));

} else {
var statearr_15650_17742 = state_15614__$1;
(statearr_15650_17742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (9))){
var inst_15591 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
var statearr_15651_17747 = state_15614__$1;
(statearr_15651_17747[(2)] = inst_15591);

(statearr_15651_17747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (5))){
var inst_15547 = cljs.core.deref(mults);
var inst_15548 = cljs.core.vals(inst_15547);
var inst_15549 = cljs.core.seq(inst_15548);
var inst_15550 = inst_15549;
var inst_15551 = null;
var inst_15552 = (0);
var inst_15553 = (0);
var state_15614__$1 = (function (){var statearr_15653 = state_15614;
(statearr_15653[(13)] = inst_15551);

(statearr_15653[(14)] = inst_15550);

(statearr_15653[(15)] = inst_15553);

(statearr_15653[(16)] = inst_15552);

return statearr_15653;
})();
var statearr_15655_17752 = state_15614__$1;
(statearr_15655_17752[(2)] = null);

(statearr_15655_17752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (14))){
var state_15614__$1 = state_15614;
var statearr_15659_17753 = state_15614__$1;
(statearr_15659_17753[(2)] = null);

(statearr_15659_17753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (16))){
var inst_15565 = (state_15614[(10)]);
var inst_15570 = cljs.core.chunk_first(inst_15565);
var inst_15571 = cljs.core.chunk_rest(inst_15565);
var inst_15572 = cljs.core.count(inst_15570);
var inst_15550 = inst_15571;
var inst_15551 = inst_15570;
var inst_15552 = inst_15572;
var inst_15553 = (0);
var state_15614__$1 = (function (){var statearr_15660 = state_15614;
(statearr_15660[(13)] = inst_15551);

(statearr_15660[(14)] = inst_15550);

(statearr_15660[(15)] = inst_15553);

(statearr_15660[(16)] = inst_15552);

return statearr_15660;
})();
var statearr_15661_17754 = state_15614__$1;
(statearr_15661_17754[(2)] = null);

(statearr_15661_17754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (10))){
var inst_15551 = (state_15614[(13)]);
var inst_15550 = (state_15614[(14)]);
var inst_15553 = (state_15614[(15)]);
var inst_15552 = (state_15614[(16)]);
var inst_15558 = cljs.core._nth(inst_15551,inst_15553);
var inst_15560 = cljs.core.async.muxch_STAR_(inst_15558);
var inst_15561 = cljs.core.async.close_BANG_(inst_15560);
var inst_15562 = (inst_15553 + (1));
var tmp15656 = inst_15551;
var tmp15657 = inst_15550;
var tmp15658 = inst_15552;
var inst_15550__$1 = tmp15657;
var inst_15551__$1 = tmp15656;
var inst_15552__$1 = tmp15658;
var inst_15553__$1 = inst_15562;
var state_15614__$1 = (function (){var statearr_15662 = state_15614;
(statearr_15662[(13)] = inst_15551__$1);

(statearr_15662[(17)] = inst_15561);

(statearr_15662[(14)] = inst_15550__$1);

(statearr_15662[(15)] = inst_15553__$1);

(statearr_15662[(16)] = inst_15552__$1);

return statearr_15662;
})();
var statearr_15664_17758 = state_15614__$1;
(statearr_15664_17758[(2)] = null);

(statearr_15664_17758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (18))){
var inst_15581 = (state_15614[(2)]);
var state_15614__$1 = state_15614;
var statearr_15669_17759 = state_15614__$1;
(statearr_15669_17759[(2)] = inst_15581);

(statearr_15669_17759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15615 === (8))){
var inst_15553 = (state_15614[(15)]);
var inst_15552 = (state_15614[(16)]);
var inst_15555 = (inst_15553 < inst_15552);
var inst_15556 = inst_15555;
var state_15614__$1 = state_15614;
if(cljs.core.truth_(inst_15556)){
var statearr_15671_17760 = state_15614__$1;
(statearr_15671_17760[(1)] = (10));

} else {
var statearr_15672_17761 = state_15614__$1;
(statearr_15672_17761[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_15673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15673[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_15673[(1)] = (1));

return statearr_15673;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_15614){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_15614);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e15674){var ex__12934__auto__ = e15674;
var statearr_15675_17763 = state_15614;
(statearr_15675_17763[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_15614[(4)]))){
var statearr_15676_17767 = state_15614;
(statearr_15676_17767[(1)] = cljs.core.first((state_15614[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17768 = state_15614;
state_15614 = G__17768;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_15614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_15614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_15678 = f__13520__auto__();
(statearr_15678[(6)] = c__13519__auto___17687);

return statearr_15678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15681 = arguments.length;
switch (G__15681) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15685 = arguments.length;
switch (G__15685) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15693 = arguments.length;
switch (G__15693) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13519__auto___17787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_15776){
var state_val_15777 = (state_15776[(1)]);
if((state_val_15777 === (7))){
var state_15776__$1 = state_15776;
var statearr_15779_17789 = state_15776__$1;
(statearr_15779_17789[(2)] = null);

(statearr_15779_17789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (1))){
var state_15776__$1 = state_15776;
var statearr_15780_17790 = state_15776__$1;
(statearr_15780_17790[(2)] = null);

(statearr_15780_17790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (4))){
var inst_15707 = (state_15776[(7)]);
var inst_15708 = (state_15776[(8)]);
var inst_15711 = (inst_15708 < inst_15707);
var state_15776__$1 = state_15776;
if(cljs.core.truth_(inst_15711)){
var statearr_15781_17795 = state_15776__$1;
(statearr_15781_17795[(1)] = (6));

} else {
var statearr_15782_17800 = state_15776__$1;
(statearr_15782_17800[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (15))){
var inst_15761 = (state_15776[(9)]);
var inst_15766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15761);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15776__$1,(17),out,inst_15766);
} else {
if((state_val_15777 === (13))){
var inst_15761 = (state_15776[(9)]);
var inst_15761__$1 = (state_15776[(2)]);
var inst_15762 = cljs.core.some(cljs.core.nil_QMARK_,inst_15761__$1);
var state_15776__$1 = (function (){var statearr_15787 = state_15776;
(statearr_15787[(9)] = inst_15761__$1);

return statearr_15787;
})();
if(cljs.core.truth_(inst_15762)){
var statearr_15789_17805 = state_15776__$1;
(statearr_15789_17805[(1)] = (14));

} else {
var statearr_15790_17806 = state_15776__$1;
(statearr_15790_17806[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (6))){
var state_15776__$1 = state_15776;
var statearr_15792_17807 = state_15776__$1;
(statearr_15792_17807[(2)] = null);

(statearr_15792_17807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (17))){
var inst_15768 = (state_15776[(2)]);
var state_15776__$1 = (function (){var statearr_15803 = state_15776;
(statearr_15803[(10)] = inst_15768);

return statearr_15803;
})();
var statearr_15811_17808 = state_15776__$1;
(statearr_15811_17808[(2)] = null);

(statearr_15811_17808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (3))){
var inst_15773 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15776__$1,inst_15773);
} else {
if((state_val_15777 === (12))){
var _ = (function (){var statearr_15821 = state_15776;
(statearr_15821[(4)] = cljs.core.rest((state_15776[(4)])));

return statearr_15821;
})();
var state_15776__$1 = state_15776;
var ex15795 = (state_15776__$1[(2)]);
var statearr_15822_17814 = state_15776__$1;
(statearr_15822_17814[(5)] = ex15795);


if((ex15795 instanceof Object)){
var statearr_15825_17815 = state_15776__$1;
(statearr_15825_17815[(1)] = (11));

(statearr_15825_17815[(5)] = null);

} else {
throw ex15795;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (2))){
var inst_15706 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15707 = cnt;
var inst_15708 = (0);
var state_15776__$1 = (function (){var statearr_15834 = state_15776;
(statearr_15834[(7)] = inst_15707);

(statearr_15834[(8)] = inst_15708);

(statearr_15834[(11)] = inst_15706);

return statearr_15834;
})();
var statearr_15838_17823 = state_15776__$1;
(statearr_15838_17823[(2)] = null);

(statearr_15838_17823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (11))){
var inst_15715 = (state_15776[(2)]);
var inst_15716 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15776__$1 = (function (){var statearr_15842 = state_15776;
(statearr_15842[(12)] = inst_15715);

return statearr_15842;
})();
var statearr_15843_17825 = state_15776__$1;
(statearr_15843_17825[(2)] = inst_15716);

(statearr_15843_17825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (9))){
var inst_15708 = (state_15776[(8)]);
var _ = (function (){var statearr_15844 = state_15776;
(statearr_15844[(4)] = cljs.core.cons((12),(state_15776[(4)])));

return statearr_15844;
})();
var inst_15723 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15708) : chs__$1.call(null,inst_15708));
var inst_15724 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15708) : done.call(null,inst_15708));
var inst_15725 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15723,inst_15724);
var ___$1 = (function (){var statearr_15848 = state_15776;
(statearr_15848[(4)] = cljs.core.rest((state_15776[(4)])));

return statearr_15848;
})();
var state_15776__$1 = state_15776;
var statearr_15849_17829 = state_15776__$1;
(statearr_15849_17829[(2)] = inst_15725);

(statearr_15849_17829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (5))){
var inst_15735 = (state_15776[(2)]);
var state_15776__$1 = (function (){var statearr_15850 = state_15776;
(statearr_15850[(13)] = inst_15735);

return statearr_15850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15776__$1,(13),dchan);
} else {
if((state_val_15777 === (14))){
var inst_15764 = cljs.core.async.close_BANG_(out);
var state_15776__$1 = state_15776;
var statearr_15851_17832 = state_15776__$1;
(statearr_15851_17832[(2)] = inst_15764);

(statearr_15851_17832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (16))){
var inst_15771 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15852_17835 = state_15776__$1;
(statearr_15852_17835[(2)] = inst_15771);

(statearr_15852_17835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (10))){
var inst_15708 = (state_15776[(8)]);
var inst_15728 = (state_15776[(2)]);
var inst_15729 = (inst_15708 + (1));
var inst_15708__$1 = inst_15729;
var state_15776__$1 = (function (){var statearr_15853 = state_15776;
(statearr_15853[(8)] = inst_15708__$1);

(statearr_15853[(14)] = inst_15728);

return statearr_15853;
})();
var statearr_15854_17839 = state_15776__$1;
(statearr_15854_17839[(2)] = null);

(statearr_15854_17839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (8))){
var inst_15733 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15855_17843 = state_15776__$1;
(statearr_15855_17843[(2)] = inst_15733);

(statearr_15855_17843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_15861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15861[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_15861[(1)] = (1));

return statearr_15861;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_15776){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_15776);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e15869){var ex__12934__auto__ = e15869;
var statearr_15870_17853 = state_15776;
(statearr_15870_17853[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_15776[(4)]))){
var statearr_15875_17854 = state_15776;
(statearr_15875_17854[(1)] = cljs.core.first((state_15776[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17860 = state_15776;
state_15776 = G__17860;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_15776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_15776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_15876 = f__13520__auto__();
(statearr_15876[(6)] = c__13519__auto___17787);

return statearr_15876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15884 = arguments.length;
switch (G__15884) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13519__auto___17863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_15921){
var state_val_15922 = (state_15921[(1)]);
if((state_val_15922 === (7))){
var inst_15901 = (state_15921[(7)]);
var inst_15900 = (state_15921[(8)]);
var inst_15900__$1 = (state_15921[(2)]);
var inst_15901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15900__$1,(0),null);
var inst_15902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15900__$1,(1),null);
var inst_15903 = (inst_15901__$1 == null);
var state_15921__$1 = (function (){var statearr_15930 = state_15921;
(statearr_15930[(7)] = inst_15901__$1);

(statearr_15930[(8)] = inst_15900__$1);

(statearr_15930[(9)] = inst_15902);

return statearr_15930;
})();
if(cljs.core.truth_(inst_15903)){
var statearr_15935_17868 = state_15921__$1;
(statearr_15935_17868[(1)] = (8));

} else {
var statearr_15937_17869 = state_15921__$1;
(statearr_15937_17869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (1))){
var inst_15886 = cljs.core.vec(chs);
var inst_15887 = inst_15886;
var state_15921__$1 = (function (){var statearr_15939 = state_15921;
(statearr_15939[(10)] = inst_15887);

return statearr_15939;
})();
var statearr_15942_17874 = state_15921__$1;
(statearr_15942_17874[(2)] = null);

(statearr_15942_17874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (4))){
var inst_15887 = (state_15921[(10)]);
var state_15921__$1 = state_15921;
return cljs.core.async.ioc_alts_BANG_(state_15921__$1,(7),inst_15887);
} else {
if((state_val_15922 === (6))){
var inst_15917 = (state_15921[(2)]);
var state_15921__$1 = state_15921;
var statearr_15944_17875 = state_15921__$1;
(statearr_15944_17875[(2)] = inst_15917);

(statearr_15944_17875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (3))){
var inst_15919 = (state_15921[(2)]);
var state_15921__$1 = state_15921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15921__$1,inst_15919);
} else {
if((state_val_15922 === (2))){
var inst_15887 = (state_15921[(10)]);
var inst_15890 = cljs.core.count(inst_15887);
var inst_15891 = (inst_15890 > (0));
var state_15921__$1 = state_15921;
if(cljs.core.truth_(inst_15891)){
var statearr_15947_17880 = state_15921__$1;
(statearr_15947_17880[(1)] = (4));

} else {
var statearr_15948_17881 = state_15921__$1;
(statearr_15948_17881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (11))){
var inst_15887 = (state_15921[(10)]);
var inst_15910 = (state_15921[(2)]);
var tmp15946 = inst_15887;
var inst_15887__$1 = tmp15946;
var state_15921__$1 = (function (){var statearr_15953 = state_15921;
(statearr_15953[(11)] = inst_15910);

(statearr_15953[(10)] = inst_15887__$1);

return statearr_15953;
})();
var statearr_15954_17882 = state_15921__$1;
(statearr_15954_17882[(2)] = null);

(statearr_15954_17882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (9))){
var inst_15901 = (state_15921[(7)]);
var state_15921__$1 = state_15921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15921__$1,(11),out,inst_15901);
} else {
if((state_val_15922 === (5))){
var inst_15915 = cljs.core.async.close_BANG_(out);
var state_15921__$1 = state_15921;
var statearr_15964_17887 = state_15921__$1;
(statearr_15964_17887[(2)] = inst_15915);

(statearr_15964_17887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (10))){
var inst_15913 = (state_15921[(2)]);
var state_15921__$1 = state_15921;
var statearr_15966_17894 = state_15921__$1;
(statearr_15966_17894[(2)] = inst_15913);

(statearr_15966_17894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (8))){
var inst_15887 = (state_15921[(10)]);
var inst_15901 = (state_15921[(7)]);
var inst_15900 = (state_15921[(8)]);
var inst_15902 = (state_15921[(9)]);
var inst_15905 = (function (){var cs = inst_15887;
var vec__15893 = inst_15900;
var v = inst_15901;
var c = inst_15902;
return (function (p1__15877_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15877_SHARP_);
});
})();
var inst_15906 = cljs.core.filterv(inst_15905,inst_15887);
var inst_15887__$1 = inst_15906;
var state_15921__$1 = (function (){var statearr_15970 = state_15921;
(statearr_15970[(10)] = inst_15887__$1);

return statearr_15970;
})();
var statearr_15971_17898 = state_15921__$1;
(statearr_15971_17898[(2)] = null);

(statearr_15971_17898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_15974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15974[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_15974[(1)] = (1));

return statearr_15974;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_15921){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_15921);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e15978){var ex__12934__auto__ = e15978;
var statearr_15979_17907 = state_15921;
(statearr_15979_17907[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_15921[(4)]))){
var statearr_15981_17908 = state_15921;
(statearr_15981_17908[(1)] = cljs.core.first((state_15921[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17911 = state_15921;
state_15921 = G__17911;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_15921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_15921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_15988 = f__13520__auto__();
(statearr_15988[(6)] = c__13519__auto___17863);

return statearr_15988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16000 = arguments.length;
switch (G__16000) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13519__auto___17927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_16030){
var state_val_16031 = (state_16030[(1)]);
if((state_val_16031 === (7))){
var inst_16009 = (state_16030[(7)]);
var inst_16009__$1 = (state_16030[(2)]);
var inst_16010 = (inst_16009__$1 == null);
var inst_16011 = cljs.core.not(inst_16010);
var state_16030__$1 = (function (){var statearr_16032 = state_16030;
(statearr_16032[(7)] = inst_16009__$1);

return statearr_16032;
})();
if(inst_16011){
var statearr_16033_17931 = state_16030__$1;
(statearr_16033_17931[(1)] = (8));

} else {
var statearr_16035_17936 = state_16030__$1;
(statearr_16035_17936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (1))){
var inst_16002 = (0);
var state_16030__$1 = (function (){var statearr_16036 = state_16030;
(statearr_16036[(8)] = inst_16002);

return statearr_16036;
})();
var statearr_16038_17937 = state_16030__$1;
(statearr_16038_17937[(2)] = null);

(statearr_16038_17937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (4))){
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16030__$1,(7),ch);
} else {
if((state_val_16031 === (6))){
var inst_16025 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16039_17938 = state_16030__$1;
(statearr_16039_17938[(2)] = inst_16025);

(statearr_16039_17938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (3))){
var inst_16027 = (state_16030[(2)]);
var inst_16028 = cljs.core.async.close_BANG_(out);
var state_16030__$1 = (function (){var statearr_16040 = state_16030;
(statearr_16040[(9)] = inst_16027);

return statearr_16040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16030__$1,inst_16028);
} else {
if((state_val_16031 === (2))){
var inst_16002 = (state_16030[(8)]);
var inst_16004 = (inst_16002 < n);
var state_16030__$1 = state_16030;
if(cljs.core.truth_(inst_16004)){
var statearr_16047_17943 = state_16030__$1;
(statearr_16047_17943[(1)] = (4));

} else {
var statearr_16048_17948 = state_16030__$1;
(statearr_16048_17948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (11))){
var inst_16002 = (state_16030[(8)]);
var inst_16014 = (state_16030[(2)]);
var inst_16015 = (inst_16002 + (1));
var inst_16002__$1 = inst_16015;
var state_16030__$1 = (function (){var statearr_16051 = state_16030;
(statearr_16051[(8)] = inst_16002__$1);

(statearr_16051[(10)] = inst_16014);

return statearr_16051;
})();
var statearr_16052_17949 = state_16030__$1;
(statearr_16052_17949[(2)] = null);

(statearr_16052_17949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (9))){
var state_16030__$1 = state_16030;
var statearr_16055_17950 = state_16030__$1;
(statearr_16055_17950[(2)] = null);

(statearr_16055_17950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (5))){
var state_16030__$1 = state_16030;
var statearr_16057_17951 = state_16030__$1;
(statearr_16057_17951[(2)] = null);

(statearr_16057_17951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (10))){
var inst_16022 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16059_17953 = state_16030__$1;
(statearr_16059_17953[(2)] = inst_16022);

(statearr_16059_17953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (8))){
var inst_16009 = (state_16030[(7)]);
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16030__$1,(11),out,inst_16009);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_16061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16061[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_16061[(1)] = (1));

return statearr_16061;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_16030){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_16030);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e16063){var ex__12934__auto__ = e16063;
var statearr_16064_17960 = state_16030;
(statearr_16064_17960[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_16030[(4)]))){
var statearr_16067_17961 = state_16030;
(statearr_16067_17961[(1)] = cljs.core.first((state_16030[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17962 = state_16030;
state_16030 = G__17962;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_16030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_16030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_16071 = f__13520__auto__();
(statearr_16071[(6)] = c__13519__auto___17927);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16081 = (function (f,ch,meta16074,_,fn1,meta16082){
this.f = f;
this.ch = ch;
this.meta16074 = meta16074;
this._ = _;
this.fn1 = fn1;
this.meta16082 = meta16082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16083,meta16082__$1){
var self__ = this;
var _16083__$1 = this;
return (new cljs.core.async.t_cljs$core$async16081(self__.f,self__.ch,self__.meta16074,self__._,self__.fn1,meta16082__$1));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16083){
var self__ = this;
var _16083__$1 = this;
return self__.meta16082;
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16072_SHARP_){
var G__16093 = (((p1__16072_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16072_SHARP_) : self__.f.call(null,p1__16072_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16093) : f1.call(null,G__16093));
});
}));

(cljs.core.async.t_cljs$core$async16081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16074","meta16074",177213749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16073","cljs.core.async/t_cljs$core$async16073",-734647147,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16082","meta16082",-677461928,null)], null);
}));

(cljs.core.async.t_cljs$core$async16081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16081");

(cljs.core.async.t_cljs$core$async16081.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16081.
 */
cljs.core.async.__GT_t_cljs$core$async16081 = (function cljs$core$async$__GT_t_cljs$core$async16081(f,ch,meta16074,_,fn1,meta16082){
return (new cljs.core.async.t_cljs$core$async16081(f,ch,meta16074,_,fn1,meta16082));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16073 = (function (f,ch,meta16074){
this.f = f;
this.ch = ch;
this.meta16074 = meta16074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16075,meta16074__$1){
var self__ = this;
var _16075__$1 = this;
return (new cljs.core.async.t_cljs$core$async16073(self__.f,self__.ch,meta16074__$1));
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16075){
var self__ = this;
var _16075__$1 = this;
return self__.meta16074;
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16081(self__.f,self__.ch,self__.meta16074,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16105 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16105) : self__.f.call(null,G__16105));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16074","meta16074",177213749,null)], null);
}));

(cljs.core.async.t_cljs$core$async16073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16073");

(cljs.core.async.t_cljs$core$async16073.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16073.
 */
cljs.core.async.__GT_t_cljs$core$async16073 = (function cljs$core$async$__GT_t_cljs$core$async16073(f,ch,meta16074){
return (new cljs.core.async.t_cljs$core$async16073(f,ch,meta16074));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16116 = (function (f,ch,meta16117){
this.f = f;
this.ch = ch;
this.meta16117 = meta16117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16118,meta16117__$1){
var self__ = this;
var _16118__$1 = this;
return (new cljs.core.async.t_cljs$core$async16116(self__.f,self__.ch,meta16117__$1));
}));

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16118){
var self__ = this;
var _16118__$1 = this;
return self__.meta16117;
}));

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16117","meta16117",1261240413,null)], null);
}));

(cljs.core.async.t_cljs$core$async16116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16116");

(cljs.core.async.t_cljs$core$async16116.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16116.
 */
cljs.core.async.__GT_t_cljs$core$async16116 = (function cljs$core$async$__GT_t_cljs$core$async16116(f,ch,meta16117){
return (new cljs.core.async.t_cljs$core$async16116(f,ch,meta16117));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16116(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16124 = (function (p,ch,meta16125){
this.p = p;
this.ch = ch;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16126,meta16125__$1){
var self__ = this;
var _16126__$1 = this;
return (new cljs.core.async.t_cljs$core$async16124(self__.p,self__.ch,meta16125__$1));
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16126){
var self__ = this;
var _16126__$1 = this;
return self__.meta16125;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16125","meta16125",519741344,null)], null);
}));

(cljs.core.async.t_cljs$core$async16124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16124");

(cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16124.
 */
cljs.core.async.__GT_t_cljs$core$async16124 = (function cljs$core$async$__GT_t_cljs$core$async16124(p,ch,meta16125){
return (new cljs.core.async.t_cljs$core$async16124(p,ch,meta16125));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16124(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16142 = arguments.length;
switch (G__16142) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13519__auto___17992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_16164){
var state_val_16165 = (state_16164[(1)]);
if((state_val_16165 === (7))){
var inst_16160 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16176_17993 = state_16164__$1;
(statearr_16176_17993[(2)] = inst_16160);

(statearr_16176_17993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (1))){
var state_16164__$1 = state_16164;
var statearr_16177_17995 = state_16164__$1;
(statearr_16177_17995[(2)] = null);

(statearr_16177_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (4))){
var inst_16146 = (state_16164[(7)]);
var inst_16146__$1 = (state_16164[(2)]);
var inst_16147 = (inst_16146__$1 == null);
var state_16164__$1 = (function (){var statearr_16179 = state_16164;
(statearr_16179[(7)] = inst_16146__$1);

return statearr_16179;
})();
if(cljs.core.truth_(inst_16147)){
var statearr_16180_17999 = state_16164__$1;
(statearr_16180_17999[(1)] = (5));

} else {
var statearr_16181_18000 = state_16164__$1;
(statearr_16181_18000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (6))){
var inst_16146 = (state_16164[(7)]);
var inst_16151 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16146) : p.call(null,inst_16146));
var state_16164__$1 = state_16164;
if(cljs.core.truth_(inst_16151)){
var statearr_16185_18001 = state_16164__$1;
(statearr_16185_18001[(1)] = (8));

} else {
var statearr_16186_18004 = state_16164__$1;
(statearr_16186_18004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (3))){
var inst_16162 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16164__$1,inst_16162);
} else {
if((state_val_16165 === (2))){
var state_16164__$1 = state_16164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16164__$1,(4),ch);
} else {
if((state_val_16165 === (11))){
var inst_16154 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16187_18007 = state_16164__$1;
(statearr_16187_18007[(2)] = inst_16154);

(statearr_16187_18007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (9))){
var state_16164__$1 = state_16164;
var statearr_16188_18008 = state_16164__$1;
(statearr_16188_18008[(2)] = null);

(statearr_16188_18008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (5))){
var inst_16149 = cljs.core.async.close_BANG_(out);
var state_16164__$1 = state_16164;
var statearr_16189_18009 = state_16164__$1;
(statearr_16189_18009[(2)] = inst_16149);

(statearr_16189_18009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (10))){
var inst_16157 = (state_16164[(2)]);
var state_16164__$1 = (function (){var statearr_16190 = state_16164;
(statearr_16190[(8)] = inst_16157);

return statearr_16190;
})();
var statearr_16191_18017 = state_16164__$1;
(statearr_16191_18017[(2)] = null);

(statearr_16191_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16165 === (8))){
var inst_16146 = (state_16164[(7)]);
var state_16164__$1 = state_16164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16164__$1,(11),out,inst_16146);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_16193 = [null,null,null,null,null,null,null,null,null];
(statearr_16193[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_16193[(1)] = (1));

return statearr_16193;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_16164){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_16164);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e16194){var ex__12934__auto__ = e16194;
var statearr_16195_18018 = state_16164;
(statearr_16195_18018[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_16164[(4)]))){
var statearr_16199_18019 = state_16164;
(statearr_16199_18019[(1)] = cljs.core.first((state_16164[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18020 = state_16164;
state_16164 = G__18020;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_16164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_16164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_16200 = f__13520__auto__();
(statearr_16200[(6)] = c__13519__auto___17992);

return statearr_16200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16205 = arguments.length;
switch (G__16205) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_16276){
var state_val_16277 = (state_16276[(1)]);
if((state_val_16277 === (7))){
var inst_16272 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
var statearr_16278_18035 = state_16276__$1;
(statearr_16278_18035[(2)] = inst_16272);

(statearr_16278_18035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (20))){
var inst_16242 = (state_16276[(7)]);
var inst_16253 = (state_16276[(2)]);
var inst_16254 = cljs.core.next(inst_16242);
var inst_16226 = inst_16254;
var inst_16227 = null;
var inst_16228 = (0);
var inst_16229 = (0);
var state_16276__$1 = (function (){var statearr_16280 = state_16276;
(statearr_16280[(8)] = inst_16227);

(statearr_16280[(9)] = inst_16228);

(statearr_16280[(10)] = inst_16229);

(statearr_16280[(11)] = inst_16253);

(statearr_16280[(12)] = inst_16226);

return statearr_16280;
})();
var statearr_16281_18046 = state_16276__$1;
(statearr_16281_18046[(2)] = null);

(statearr_16281_18046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (1))){
var state_16276__$1 = state_16276;
var statearr_16282_18047 = state_16276__$1;
(statearr_16282_18047[(2)] = null);

(statearr_16282_18047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (4))){
var inst_16215 = (state_16276[(13)]);
var inst_16215__$1 = (state_16276[(2)]);
var inst_16216 = (inst_16215__$1 == null);
var state_16276__$1 = (function (){var statearr_16286 = state_16276;
(statearr_16286[(13)] = inst_16215__$1);

return statearr_16286;
})();
if(cljs.core.truth_(inst_16216)){
var statearr_16287_18053 = state_16276__$1;
(statearr_16287_18053[(1)] = (5));

} else {
var statearr_16288_18057 = state_16276__$1;
(statearr_16288_18057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (15))){
var state_16276__$1 = state_16276;
var statearr_16293_18058 = state_16276__$1;
(statearr_16293_18058[(2)] = null);

(statearr_16293_18058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (21))){
var state_16276__$1 = state_16276;
var statearr_16294_18065 = state_16276__$1;
(statearr_16294_18065[(2)] = null);

(statearr_16294_18065[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (13))){
var inst_16227 = (state_16276[(8)]);
var inst_16228 = (state_16276[(9)]);
var inst_16229 = (state_16276[(10)]);
var inst_16226 = (state_16276[(12)]);
var inst_16237 = (state_16276[(2)]);
var inst_16238 = (inst_16229 + (1));
var tmp16290 = inst_16227;
var tmp16291 = inst_16228;
var tmp16292 = inst_16226;
var inst_16226__$1 = tmp16292;
var inst_16227__$1 = tmp16290;
var inst_16228__$1 = tmp16291;
var inst_16229__$1 = inst_16238;
var state_16276__$1 = (function (){var statearr_16308 = state_16276;
(statearr_16308[(8)] = inst_16227__$1);

(statearr_16308[(14)] = inst_16237);

(statearr_16308[(9)] = inst_16228__$1);

(statearr_16308[(10)] = inst_16229__$1);

(statearr_16308[(12)] = inst_16226__$1);

return statearr_16308;
})();
var statearr_16313_18076 = state_16276__$1;
(statearr_16313_18076[(2)] = null);

(statearr_16313_18076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (22))){
var state_16276__$1 = state_16276;
var statearr_16321_18077 = state_16276__$1;
(statearr_16321_18077[(2)] = null);

(statearr_16321_18077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (6))){
var inst_16215 = (state_16276[(13)]);
var inst_16224 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16215) : f.call(null,inst_16215));
var inst_16225 = cljs.core.seq(inst_16224);
var inst_16226 = inst_16225;
var inst_16227 = null;
var inst_16228 = (0);
var inst_16229 = (0);
var state_16276__$1 = (function (){var statearr_16322 = state_16276;
(statearr_16322[(8)] = inst_16227);

(statearr_16322[(9)] = inst_16228);

(statearr_16322[(10)] = inst_16229);

(statearr_16322[(12)] = inst_16226);

return statearr_16322;
})();
var statearr_16323_18080 = state_16276__$1;
(statearr_16323_18080[(2)] = null);

(statearr_16323_18080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (17))){
var inst_16242 = (state_16276[(7)]);
var inst_16246 = cljs.core.chunk_first(inst_16242);
var inst_16247 = cljs.core.chunk_rest(inst_16242);
var inst_16248 = cljs.core.count(inst_16246);
var inst_16226 = inst_16247;
var inst_16227 = inst_16246;
var inst_16228 = inst_16248;
var inst_16229 = (0);
var state_16276__$1 = (function (){var statearr_16324 = state_16276;
(statearr_16324[(8)] = inst_16227);

(statearr_16324[(9)] = inst_16228);

(statearr_16324[(10)] = inst_16229);

(statearr_16324[(12)] = inst_16226);

return statearr_16324;
})();
var statearr_16333_18092 = state_16276__$1;
(statearr_16333_18092[(2)] = null);

(statearr_16333_18092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (3))){
var inst_16274 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16276__$1,inst_16274);
} else {
if((state_val_16277 === (12))){
var inst_16262 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
var statearr_16340_18098 = state_16276__$1;
(statearr_16340_18098[(2)] = inst_16262);

(statearr_16340_18098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (2))){
var state_16276__$1 = state_16276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16276__$1,(4),in$);
} else {
if((state_val_16277 === (23))){
var inst_16270 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
var statearr_16347_18100 = state_16276__$1;
(statearr_16347_18100[(2)] = inst_16270);

(statearr_16347_18100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (19))){
var inst_16257 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
var statearr_16348_18105 = state_16276__$1;
(statearr_16348_18105[(2)] = inst_16257);

(statearr_16348_18105[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (11))){
var inst_16242 = (state_16276[(7)]);
var inst_16226 = (state_16276[(12)]);
var inst_16242__$1 = cljs.core.seq(inst_16226);
var state_16276__$1 = (function (){var statearr_16350 = state_16276;
(statearr_16350[(7)] = inst_16242__$1);

return statearr_16350;
})();
if(inst_16242__$1){
var statearr_16353_18114 = state_16276__$1;
(statearr_16353_18114[(1)] = (14));

} else {
var statearr_16354_18120 = state_16276__$1;
(statearr_16354_18120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (9))){
var inst_16264 = (state_16276[(2)]);
var inst_16265 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16276__$1 = (function (){var statearr_16356 = state_16276;
(statearr_16356[(15)] = inst_16264);

return statearr_16356;
})();
if(cljs.core.truth_(inst_16265)){
var statearr_16358_18132 = state_16276__$1;
(statearr_16358_18132[(1)] = (21));

} else {
var statearr_16359_18134 = state_16276__$1;
(statearr_16359_18134[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (5))){
var inst_16218 = cljs.core.async.close_BANG_(out);
var state_16276__$1 = state_16276;
var statearr_16361_18137 = state_16276__$1;
(statearr_16361_18137[(2)] = inst_16218);

(statearr_16361_18137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (14))){
var inst_16242 = (state_16276[(7)]);
var inst_16244 = cljs.core.chunked_seq_QMARK_(inst_16242);
var state_16276__$1 = state_16276;
if(inst_16244){
var statearr_16362_18142 = state_16276__$1;
(statearr_16362_18142[(1)] = (17));

} else {
var statearr_16363_18143 = state_16276__$1;
(statearr_16363_18143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (16))){
var inst_16260 = (state_16276[(2)]);
var state_16276__$1 = state_16276;
var statearr_16364_18147 = state_16276__$1;
(statearr_16364_18147[(2)] = inst_16260);

(statearr_16364_18147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16277 === (10))){
var inst_16227 = (state_16276[(8)]);
var inst_16229 = (state_16276[(10)]);
var inst_16235 = cljs.core._nth(inst_16227,inst_16229);
var state_16276__$1 = state_16276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16276__$1,(13),out,inst_16235);
} else {
if((state_val_16277 === (18))){
var inst_16242 = (state_16276[(7)]);
var inst_16251 = cljs.core.first(inst_16242);
var state_16276__$1 = state_16276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16276__$1,(20),out,inst_16251);
} else {
if((state_val_16277 === (8))){
var inst_16228 = (state_16276[(9)]);
var inst_16229 = (state_16276[(10)]);
var inst_16232 = (inst_16229 < inst_16228);
var inst_16233 = inst_16232;
var state_16276__$1 = state_16276;
if(cljs.core.truth_(inst_16233)){
var statearr_16368_18162 = state_16276__$1;
(statearr_16368_18162[(1)] = (10));

} else {
var statearr_16369_18163 = state_16276__$1;
(statearr_16369_18163[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12931__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12931__auto____0 = (function (){
var statearr_16374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16374[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12931__auto__);

(statearr_16374[(1)] = (1));

return statearr_16374;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12931__auto____1 = (function (state_16276){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_16276);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e16379){var ex__12934__auto__ = e16379;
var statearr_16380_18174 = state_16276;
(statearr_16380_18174[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_16276[(4)]))){
var statearr_16385_18176 = state_16276;
(statearr_16385_18176[(1)] = cljs.core.first((state_16276[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18186 = state_16276;
state_16276 = G__18186;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12931__auto__ = function(state_16276){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12931__auto____1.call(this,state_16276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12931__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12931__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_16386 = f__13520__auto__();
(statearr_16386[(6)] = c__13519__auto__);

return statearr_16386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

return c__13519__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16388 = arguments.length;
switch (G__16388) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16390 = arguments.length;
switch (G__16390) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16397 = arguments.length;
switch (G__16397) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13519__auto___18229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_16424){
var state_val_16425 = (state_16424[(1)]);
if((state_val_16425 === (7))){
var inst_16419 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16429_18230 = state_16424__$1;
(statearr_16429_18230[(2)] = inst_16419);

(statearr_16429_18230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (1))){
var inst_16399 = null;
var state_16424__$1 = (function (){var statearr_16431 = state_16424;
(statearr_16431[(7)] = inst_16399);

return statearr_16431;
})();
var statearr_16432_18240 = state_16424__$1;
(statearr_16432_18240[(2)] = null);

(statearr_16432_18240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (4))){
var inst_16402 = (state_16424[(8)]);
var inst_16402__$1 = (state_16424[(2)]);
var inst_16403 = (inst_16402__$1 == null);
var inst_16404 = cljs.core.not(inst_16403);
var state_16424__$1 = (function (){var statearr_16433 = state_16424;
(statearr_16433[(8)] = inst_16402__$1);

return statearr_16433;
})();
if(inst_16404){
var statearr_16434_18247 = state_16424__$1;
(statearr_16434_18247[(1)] = (5));

} else {
var statearr_16435_18248 = state_16424__$1;
(statearr_16435_18248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (6))){
var state_16424__$1 = state_16424;
var statearr_16438_18250 = state_16424__$1;
(statearr_16438_18250[(2)] = null);

(statearr_16438_18250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (3))){
var inst_16421 = (state_16424[(2)]);
var inst_16422 = cljs.core.async.close_BANG_(out);
var state_16424__$1 = (function (){var statearr_16439 = state_16424;
(statearr_16439[(9)] = inst_16421);

return statearr_16439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16424__$1,inst_16422);
} else {
if((state_val_16425 === (2))){
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16424__$1,(4),ch);
} else {
if((state_val_16425 === (11))){
var inst_16402 = (state_16424[(8)]);
var inst_16411 = (state_16424[(2)]);
var inst_16399 = inst_16402;
var state_16424__$1 = (function (){var statearr_16448 = state_16424;
(statearr_16448[(7)] = inst_16399);

(statearr_16448[(10)] = inst_16411);

return statearr_16448;
})();
var statearr_16452_18258 = state_16424__$1;
(statearr_16452_18258[(2)] = null);

(statearr_16452_18258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (9))){
var inst_16402 = (state_16424[(8)]);
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16424__$1,(11),out,inst_16402);
} else {
if((state_val_16425 === (5))){
var inst_16399 = (state_16424[(7)]);
var inst_16402 = (state_16424[(8)]);
var inst_16406 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16402,inst_16399);
var state_16424__$1 = state_16424;
if(inst_16406){
var statearr_16454_18265 = state_16424__$1;
(statearr_16454_18265[(1)] = (8));

} else {
var statearr_16455_18266 = state_16424__$1;
(statearr_16455_18266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (10))){
var inst_16416 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16456_18268 = state_16424__$1;
(statearr_16456_18268[(2)] = inst_16416);

(statearr_16456_18268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (8))){
var inst_16399 = (state_16424[(7)]);
var tmp16453 = inst_16399;
var inst_16399__$1 = tmp16453;
var state_16424__$1 = (function (){var statearr_16460 = state_16424;
(statearr_16460[(7)] = inst_16399__$1);

return statearr_16460;
})();
var statearr_16461_18270 = state_16424__$1;
(statearr_16461_18270[(2)] = null);

(statearr_16461_18270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_16462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16462[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_16462[(1)] = (1));

return statearr_16462;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_16424){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_16424);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e16463){var ex__12934__auto__ = e16463;
var statearr_16464_18274 = state_16424;
(statearr_16464_18274[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_16424[(4)]))){
var statearr_16465_18281 = state_16424;
(statearr_16465_18281[(1)] = cljs.core.first((state_16424[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18282 = state_16424;
state_16424 = G__18282;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_16424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_16424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_16467 = f__13520__auto__();
(statearr_16467[(6)] = c__13519__auto___18229);

return statearr_16467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16469 = arguments.length;
switch (G__16469) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13519__auto___18304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_16514){
var state_val_16515 = (state_16514[(1)]);
if((state_val_16515 === (7))){
var inst_16510 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16518_18312 = state_16514__$1;
(statearr_16518_18312[(2)] = inst_16510);

(statearr_16518_18312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (1))){
var inst_16472 = (new Array(n));
var inst_16473 = inst_16472;
var inst_16474 = (0);
var state_16514__$1 = (function (){var statearr_16519 = state_16514;
(statearr_16519[(7)] = inst_16474);

(statearr_16519[(8)] = inst_16473);

return statearr_16519;
})();
var statearr_16520_18324 = state_16514__$1;
(statearr_16520_18324[(2)] = null);

(statearr_16520_18324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (4))){
var inst_16478 = (state_16514[(9)]);
var inst_16478__$1 = (state_16514[(2)]);
var inst_16479 = (inst_16478__$1 == null);
var inst_16480 = cljs.core.not(inst_16479);
var state_16514__$1 = (function (){var statearr_16521 = state_16514;
(statearr_16521[(9)] = inst_16478__$1);

return statearr_16521;
})();
if(inst_16480){
var statearr_16522_18326 = state_16514__$1;
(statearr_16522_18326[(1)] = (5));

} else {
var statearr_16525_18328 = state_16514__$1;
(statearr_16525_18328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (15))){
var inst_16504 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16526_18333 = state_16514__$1;
(statearr_16526_18333[(2)] = inst_16504);

(statearr_16526_18333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (13))){
var state_16514__$1 = state_16514;
var statearr_16527_18340 = state_16514__$1;
(statearr_16527_18340[(2)] = null);

(statearr_16527_18340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (6))){
var inst_16474 = (state_16514[(7)]);
var inst_16497 = (inst_16474 > (0));
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16497)){
var statearr_16530_18348 = state_16514__$1;
(statearr_16530_18348[(1)] = (12));

} else {
var statearr_16531_18353 = state_16514__$1;
(statearr_16531_18353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (3))){
var inst_16512 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16514__$1,inst_16512);
} else {
if((state_val_16515 === (12))){
var inst_16473 = (state_16514[(8)]);
var inst_16502 = cljs.core.vec(inst_16473);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16514__$1,(15),out,inst_16502);
} else {
if((state_val_16515 === (2))){
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16514__$1,(4),ch);
} else {
if((state_val_16515 === (11))){
var inst_16491 = (state_16514[(2)]);
var inst_16492 = (new Array(n));
var inst_16473 = inst_16492;
var inst_16474 = (0);
var state_16514__$1 = (function (){var statearr_16537 = state_16514;
(statearr_16537[(10)] = inst_16491);

(statearr_16537[(7)] = inst_16474);

(statearr_16537[(8)] = inst_16473);

return statearr_16537;
})();
var statearr_16538_18381 = state_16514__$1;
(statearr_16538_18381[(2)] = null);

(statearr_16538_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (9))){
var inst_16473 = (state_16514[(8)]);
var inst_16489 = cljs.core.vec(inst_16473);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16514__$1,(11),out,inst_16489);
} else {
if((state_val_16515 === (5))){
var inst_16474 = (state_16514[(7)]);
var inst_16478 = (state_16514[(9)]);
var inst_16473 = (state_16514[(8)]);
var inst_16484 = (state_16514[(11)]);
var inst_16482 = (inst_16473[inst_16474] = inst_16478);
var inst_16484__$1 = (inst_16474 + (1));
var inst_16485 = (inst_16484__$1 < n);
var state_16514__$1 = (function (){var statearr_16539 = state_16514;
(statearr_16539[(12)] = inst_16482);

(statearr_16539[(11)] = inst_16484__$1);

return statearr_16539;
})();
if(cljs.core.truth_(inst_16485)){
var statearr_16540_18392 = state_16514__$1;
(statearr_16540_18392[(1)] = (8));

} else {
var statearr_16544_18397 = state_16514__$1;
(statearr_16544_18397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (14))){
var inst_16507 = (state_16514[(2)]);
var inst_16508 = cljs.core.async.close_BANG_(out);
var state_16514__$1 = (function (){var statearr_16551 = state_16514;
(statearr_16551[(13)] = inst_16507);

return statearr_16551;
})();
var statearr_16554_18398 = state_16514__$1;
(statearr_16554_18398[(2)] = inst_16508);

(statearr_16554_18398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (10))){
var inst_16495 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16555_18399 = state_16514__$1;
(statearr_16555_18399[(2)] = inst_16495);

(statearr_16555_18399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (8))){
var inst_16473 = (state_16514[(8)]);
var inst_16484 = (state_16514[(11)]);
var tmp16548 = inst_16473;
var inst_16473__$1 = tmp16548;
var inst_16474 = inst_16484;
var state_16514__$1 = (function (){var statearr_16556 = state_16514;
(statearr_16556[(7)] = inst_16474);

(statearr_16556[(8)] = inst_16473__$1);

return statearr_16556;
})();
var statearr_16557_18402 = state_16514__$1;
(statearr_16557_18402[(2)] = null);

(statearr_16557_18402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_16563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16563[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_16563[(1)] = (1));

return statearr_16563;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_16514){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_16514);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e16565){var ex__12934__auto__ = e16565;
var statearr_16566_18413 = state_16514;
(statearr_16566_18413[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_16514[(4)]))){
var statearr_16567_18414 = state_16514;
(statearr_16567_18414[(1)] = cljs.core.first((state_16514[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18418 = state_16514;
state_16514 = G__18418;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_16514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_16514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_16568 = f__13520__auto__();
(statearr_16568[(6)] = c__13519__auto___18304);

return statearr_16568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16579 = arguments.length;
switch (G__16579) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13519__auto___18424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_16634){
var state_val_16635 = (state_16634[(1)]);
if((state_val_16635 === (7))){
var inst_16630 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16643_18427 = state_16634__$1;
(statearr_16643_18427[(2)] = inst_16630);

(statearr_16643_18427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (1))){
var inst_16580 = [];
var inst_16581 = inst_16580;
var inst_16582 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16634__$1 = (function (){var statearr_16644 = state_16634;
(statearr_16644[(7)] = inst_16582);

(statearr_16644[(8)] = inst_16581);

return statearr_16644;
})();
var statearr_16645_18430 = state_16634__$1;
(statearr_16645_18430[(2)] = null);

(statearr_16645_18430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (4))){
var inst_16585 = (state_16634[(9)]);
var inst_16585__$1 = (state_16634[(2)]);
var inst_16586 = (inst_16585__$1 == null);
var inst_16587 = cljs.core.not(inst_16586);
var state_16634__$1 = (function (){var statearr_16646 = state_16634;
(statearr_16646[(9)] = inst_16585__$1);

return statearr_16646;
})();
if(inst_16587){
var statearr_16650_18431 = state_16634__$1;
(statearr_16650_18431[(1)] = (5));

} else {
var statearr_16655_18432 = state_16634__$1;
(statearr_16655_18432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (15))){
var inst_16581 = (state_16634[(8)]);
var inst_16622 = cljs.core.vec(inst_16581);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16634__$1,(18),out,inst_16622);
} else {
if((state_val_16635 === (13))){
var inst_16614 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16661_18439 = state_16634__$1;
(statearr_16661_18439[(2)] = inst_16614);

(statearr_16661_18439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (6))){
var inst_16581 = (state_16634[(8)]);
var inst_16616 = inst_16581.length;
var inst_16617 = (inst_16616 > (0));
var state_16634__$1 = state_16634;
if(cljs.core.truth_(inst_16617)){
var statearr_16663_18442 = state_16634__$1;
(statearr_16663_18442[(1)] = (15));

} else {
var statearr_16664_18443 = state_16634__$1;
(statearr_16664_18443[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (17))){
var inst_16627 = (state_16634[(2)]);
var inst_16628 = cljs.core.async.close_BANG_(out);
var state_16634__$1 = (function (){var statearr_16671 = state_16634;
(statearr_16671[(10)] = inst_16627);

return statearr_16671;
})();
var statearr_16673_18454 = state_16634__$1;
(statearr_16673_18454[(2)] = inst_16628);

(statearr_16673_18454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (3))){
var inst_16632 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16634__$1,inst_16632);
} else {
if((state_val_16635 === (12))){
var inst_16581 = (state_16634[(8)]);
var inst_16603 = cljs.core.vec(inst_16581);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16634__$1,(14),out,inst_16603);
} else {
if((state_val_16635 === (2))){
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16634__$1,(4),ch);
} else {
if((state_val_16635 === (11))){
var inst_16585 = (state_16634[(9)]);
var inst_16581 = (state_16634[(8)]);
var inst_16589 = (state_16634[(11)]);
var inst_16600 = inst_16581.push(inst_16585);
var tmp16677 = inst_16581;
var inst_16581__$1 = tmp16677;
var inst_16582 = inst_16589;
var state_16634__$1 = (function (){var statearr_16688 = state_16634;
(statearr_16688[(7)] = inst_16582);

(statearr_16688[(12)] = inst_16600);

(statearr_16688[(8)] = inst_16581__$1);

return statearr_16688;
})();
var statearr_16689_18455 = state_16634__$1;
(statearr_16689_18455[(2)] = null);

(statearr_16689_18455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (9))){
var inst_16582 = (state_16634[(7)]);
var inst_16596 = cljs.core.keyword_identical_QMARK_(inst_16582,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16634__$1 = state_16634;
var statearr_16692_18456 = state_16634__$1;
(statearr_16692_18456[(2)] = inst_16596);

(statearr_16692_18456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (5))){
var inst_16582 = (state_16634[(7)]);
var inst_16593 = (state_16634[(13)]);
var inst_16585 = (state_16634[(9)]);
var inst_16589 = (state_16634[(11)]);
var inst_16589__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16585) : f.call(null,inst_16585));
var inst_16593__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16589__$1,inst_16582);
var state_16634__$1 = (function (){var statearr_16693 = state_16634;
(statearr_16693[(13)] = inst_16593__$1);

(statearr_16693[(11)] = inst_16589__$1);

return statearr_16693;
})();
if(inst_16593__$1){
var statearr_16694_18458 = state_16634__$1;
(statearr_16694_18458[(1)] = (8));

} else {
var statearr_16695_18459 = state_16634__$1;
(statearr_16695_18459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (14))){
var inst_16585 = (state_16634[(9)]);
var inst_16589 = (state_16634[(11)]);
var inst_16608 = (state_16634[(2)]);
var inst_16610 = [];
var inst_16611 = inst_16610.push(inst_16585);
var inst_16581 = inst_16610;
var inst_16582 = inst_16589;
var state_16634__$1 = (function (){var statearr_16696 = state_16634;
(statearr_16696[(7)] = inst_16582);

(statearr_16696[(14)] = inst_16608);

(statearr_16696[(8)] = inst_16581);

(statearr_16696[(15)] = inst_16611);

return statearr_16696;
})();
var statearr_16697_18460 = state_16634__$1;
(statearr_16697_18460[(2)] = null);

(statearr_16697_18460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (16))){
var state_16634__$1 = state_16634;
var statearr_16698_18461 = state_16634__$1;
(statearr_16698_18461[(2)] = null);

(statearr_16698_18461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (10))){
var inst_16598 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
if(cljs.core.truth_(inst_16598)){
var statearr_16702_18463 = state_16634__$1;
(statearr_16702_18463[(1)] = (11));

} else {
var statearr_16703_18464 = state_16634__$1;
(statearr_16703_18464[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (18))){
var inst_16624 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16704_18465 = state_16634__$1;
(statearr_16704_18465[(2)] = inst_16624);

(statearr_16704_18465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16635 === (8))){
var inst_16593 = (state_16634[(13)]);
var state_16634__$1 = state_16634;
var statearr_16705_18466 = state_16634__$1;
(statearr_16705_18466[(2)] = inst_16593);

(statearr_16705_18466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12931__auto__ = null;
var cljs$core$async$state_machine__12931__auto____0 = (function (){
var statearr_16707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16707[(0)] = cljs$core$async$state_machine__12931__auto__);

(statearr_16707[(1)] = (1));

return statearr_16707;
});
var cljs$core$async$state_machine__12931__auto____1 = (function (state_16634){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_16634);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e16708){var ex__12934__auto__ = e16708;
var statearr_16709_18471 = state_16634;
(statearr_16709_18471[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_16634[(4)]))){
var statearr_16710_18473 = state_16634;
(statearr_16710_18473[(1)] = cljs.core.first((state_16634[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18475 = state_16634;
state_16634 = G__18475;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
cljs$core$async$state_machine__12931__auto__ = function(state_16634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12931__auto____1.call(this,state_16634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12931__auto____0;
cljs$core$async$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12931__auto____1;
return cljs$core$async$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_16711 = f__13520__auto__();
(statearr_16711[(6)] = c__13519__auto___18424);

return statearr_16711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
