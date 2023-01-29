goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18592 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18592(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18593 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18593(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16794 = coll;
var G__16795 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16794,G__16795) : shadow.dom.lazy_native_coll_seq.call(null,G__16794,G__16795));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16843 = arguments.length;
switch (G__16843) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16856 = arguments.length;
switch (G__16856) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16883 = arguments.length;
switch (G__16883) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16894 = arguments.length;
switch (G__16894) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16905 = arguments.length;
switch (G__16905) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16936 = arguments.length;
switch (G__16936) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16971){if((e16971 instanceof Object)){
var e = e16971;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16971;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16989 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16990 = null;
var count__16991 = (0);
var i__16992 = (0);
while(true){
if((i__16992 < count__16991)){
var el = chunk__16990.cljs$core$IIndexed$_nth$arity$2(null,i__16992);
var handler_18626__$1 = ((function (seq__16989,chunk__16990,count__16991,i__16992,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16989,chunk__16990,count__16991,i__16992,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18626__$1);


var G__18627 = seq__16989;
var G__18628 = chunk__16990;
var G__18629 = count__16991;
var G__18630 = (i__16992 + (1));
seq__16989 = G__18627;
chunk__16990 = G__18628;
count__16991 = G__18629;
i__16992 = G__18630;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16989);
if(temp__5804__auto__){
var seq__16989__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16989__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16989__$1);
var G__18631 = cljs.core.chunk_rest(seq__16989__$1);
var G__18632 = c__5568__auto__;
var G__18633 = cljs.core.count(c__5568__auto__);
var G__18634 = (0);
seq__16989 = G__18631;
chunk__16990 = G__18632;
count__16991 = G__18633;
i__16992 = G__18634;
continue;
} else {
var el = cljs.core.first(seq__16989__$1);
var handler_18635__$1 = ((function (seq__16989,chunk__16990,count__16991,i__16992,el,seq__16989__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16989,chunk__16990,count__16991,i__16992,el,seq__16989__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18635__$1);


var G__18636 = cljs.core.next(seq__16989__$1);
var G__18637 = null;
var G__18638 = (0);
var G__18639 = (0);
seq__16989 = G__18636;
chunk__16990 = G__18637;
count__16991 = G__18638;
i__16992 = G__18639;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17028 = arguments.length;
switch (G__17028) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17057 = cljs.core.seq(events);
var chunk__17059 = null;
var count__17060 = (0);
var i__17061 = (0);
while(true){
if((i__17061 < count__17060)){
var vec__17080 = chunk__17059.cljs$core$IIndexed$_nth$arity$2(null,i__17061);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17080,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18644 = seq__17057;
var G__18645 = chunk__17059;
var G__18646 = count__17060;
var G__18647 = (i__17061 + (1));
seq__17057 = G__18644;
chunk__17059 = G__18645;
count__17060 = G__18646;
i__17061 = G__18647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17057);
if(temp__5804__auto__){
var seq__17057__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17057__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17057__$1);
var G__18650 = cljs.core.chunk_rest(seq__17057__$1);
var G__18651 = c__5568__auto__;
var G__18652 = cljs.core.count(c__5568__auto__);
var G__18653 = (0);
seq__17057 = G__18650;
chunk__17059 = G__18651;
count__17060 = G__18652;
i__17061 = G__18653;
continue;
} else {
var vec__17092 = cljs.core.first(seq__17057__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17092,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18657 = cljs.core.next(seq__17057__$1);
var G__18658 = null;
var G__18659 = (0);
var G__18660 = (0);
seq__17057 = G__18657;
chunk__17059 = G__18658;
count__17060 = G__18659;
i__17061 = G__18660;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17105 = cljs.core.seq(styles);
var chunk__17106 = null;
var count__17107 = (0);
var i__17108 = (0);
while(true){
if((i__17108 < count__17107)){
var vec__17126 = chunk__17106.cljs$core$IIndexed$_nth$arity$2(null,i__17108);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17126,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18671 = seq__17105;
var G__18672 = chunk__17106;
var G__18673 = count__17107;
var G__18674 = (i__17108 + (1));
seq__17105 = G__18671;
chunk__17106 = G__18672;
count__17107 = G__18673;
i__17108 = G__18674;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17105);
if(temp__5804__auto__){
var seq__17105__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17105__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17105__$1);
var G__18675 = cljs.core.chunk_rest(seq__17105__$1);
var G__18676 = c__5568__auto__;
var G__18677 = cljs.core.count(c__5568__auto__);
var G__18678 = (0);
seq__17105 = G__18675;
chunk__17106 = G__18676;
count__17107 = G__18677;
i__17108 = G__18678;
continue;
} else {
var vec__17135 = cljs.core.first(seq__17105__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17135,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18679 = cljs.core.next(seq__17105__$1);
var G__18680 = null;
var G__18681 = (0);
var G__18682 = (0);
seq__17105 = G__18679;
chunk__17106 = G__18680;
count__17107 = G__18681;
i__17108 = G__18682;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17152_18687 = key;
var G__17152_18688__$1 = (((G__17152_18687 instanceof cljs.core.Keyword))?G__17152_18687.fqn:null);
switch (G__17152_18688__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18691 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18691,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18691,"aria-");
}
})())){
el.setAttribute(ks_18691,value);
} else {
(el[ks_18691] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17232){
var map__17234 = p__17232;
var map__17234__$1 = cljs.core.__destructure_map(map__17234);
var props = map__17234__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17234__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17241 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17241,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17241,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17241,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17246 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17246,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17246;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17253 = arguments.length;
switch (G__17253) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17279){
var vec__17282 = p__17279;
var seq__17283 = cljs.core.seq(vec__17282);
var first__17284 = cljs.core.first(seq__17283);
var seq__17283__$1 = cljs.core.next(seq__17283);
var nn = first__17284;
var first__17284__$1 = cljs.core.first(seq__17283__$1);
var seq__17283__$2 = cljs.core.next(seq__17283__$1);
var np = first__17284__$1;
var nc = seq__17283__$2;
var node = vec__17282;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17290 = nn;
var G__17291 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17290,G__17291) : create_fn.call(null,G__17290,G__17291));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17293 = nn;
var G__17294 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17293,G__17294) : create_fn.call(null,G__17293,G__17294));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17306 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306,(1),null);
var seq__17312_18717 = cljs.core.seq(node_children);
var chunk__17313_18718 = null;
var count__17314_18719 = (0);
var i__17315_18720 = (0);
while(true){
if((i__17315_18720 < count__17314_18719)){
var child_struct_18721 = chunk__17313_18718.cljs$core$IIndexed$_nth$arity$2(null,i__17315_18720);
var children_18722 = shadow.dom.dom_node(child_struct_18721);
if(cljs.core.seq_QMARK_(children_18722)){
var seq__17381_18723 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18722));
var chunk__17383_18724 = null;
var count__17384_18725 = (0);
var i__17385_18726 = (0);
while(true){
if((i__17385_18726 < count__17384_18725)){
var child_18727 = chunk__17383_18724.cljs$core$IIndexed$_nth$arity$2(null,i__17385_18726);
if(cljs.core.truth_(child_18727)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18727);


var G__18729 = seq__17381_18723;
var G__18730 = chunk__17383_18724;
var G__18731 = count__17384_18725;
var G__18732 = (i__17385_18726 + (1));
seq__17381_18723 = G__18729;
chunk__17383_18724 = G__18730;
count__17384_18725 = G__18731;
i__17385_18726 = G__18732;
continue;
} else {
var G__18735 = seq__17381_18723;
var G__18736 = chunk__17383_18724;
var G__18737 = count__17384_18725;
var G__18738 = (i__17385_18726 + (1));
seq__17381_18723 = G__18735;
chunk__17383_18724 = G__18736;
count__17384_18725 = G__18737;
i__17385_18726 = G__18738;
continue;
}
} else {
var temp__5804__auto___18739 = cljs.core.seq(seq__17381_18723);
if(temp__5804__auto___18739){
var seq__17381_18740__$1 = temp__5804__auto___18739;
if(cljs.core.chunked_seq_QMARK_(seq__17381_18740__$1)){
var c__5568__auto___18741 = cljs.core.chunk_first(seq__17381_18740__$1);
var G__18742 = cljs.core.chunk_rest(seq__17381_18740__$1);
var G__18743 = c__5568__auto___18741;
var G__18744 = cljs.core.count(c__5568__auto___18741);
var G__18745 = (0);
seq__17381_18723 = G__18742;
chunk__17383_18724 = G__18743;
count__17384_18725 = G__18744;
i__17385_18726 = G__18745;
continue;
} else {
var child_18746 = cljs.core.first(seq__17381_18740__$1);
if(cljs.core.truth_(child_18746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18746);


var G__18747 = cljs.core.next(seq__17381_18740__$1);
var G__18748 = null;
var G__18749 = (0);
var G__18750 = (0);
seq__17381_18723 = G__18747;
chunk__17383_18724 = G__18748;
count__17384_18725 = G__18749;
i__17385_18726 = G__18750;
continue;
} else {
var G__18751 = cljs.core.next(seq__17381_18740__$1);
var G__18752 = null;
var G__18753 = (0);
var G__18754 = (0);
seq__17381_18723 = G__18751;
chunk__17383_18724 = G__18752;
count__17384_18725 = G__18753;
i__17385_18726 = G__18754;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18722);
}


var G__18755 = seq__17312_18717;
var G__18756 = chunk__17313_18718;
var G__18757 = count__17314_18719;
var G__18758 = (i__17315_18720 + (1));
seq__17312_18717 = G__18755;
chunk__17313_18718 = G__18756;
count__17314_18719 = G__18757;
i__17315_18720 = G__18758;
continue;
} else {
var temp__5804__auto___18759 = cljs.core.seq(seq__17312_18717);
if(temp__5804__auto___18759){
var seq__17312_18760__$1 = temp__5804__auto___18759;
if(cljs.core.chunked_seq_QMARK_(seq__17312_18760__$1)){
var c__5568__auto___18763 = cljs.core.chunk_first(seq__17312_18760__$1);
var G__18764 = cljs.core.chunk_rest(seq__17312_18760__$1);
var G__18765 = c__5568__auto___18763;
var G__18766 = cljs.core.count(c__5568__auto___18763);
var G__18767 = (0);
seq__17312_18717 = G__18764;
chunk__17313_18718 = G__18765;
count__17314_18719 = G__18766;
i__17315_18720 = G__18767;
continue;
} else {
var child_struct_18768 = cljs.core.first(seq__17312_18760__$1);
var children_18769 = shadow.dom.dom_node(child_struct_18768);
if(cljs.core.seq_QMARK_(children_18769)){
var seq__17403_18770 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18769));
var chunk__17405_18771 = null;
var count__17406_18772 = (0);
var i__17407_18773 = (0);
while(true){
if((i__17407_18773 < count__17406_18772)){
var child_18774 = chunk__17405_18771.cljs$core$IIndexed$_nth$arity$2(null,i__17407_18773);
if(cljs.core.truth_(child_18774)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18774);


var G__18779 = seq__17403_18770;
var G__18780 = chunk__17405_18771;
var G__18781 = count__17406_18772;
var G__18782 = (i__17407_18773 + (1));
seq__17403_18770 = G__18779;
chunk__17405_18771 = G__18780;
count__17406_18772 = G__18781;
i__17407_18773 = G__18782;
continue;
} else {
var G__18783 = seq__17403_18770;
var G__18784 = chunk__17405_18771;
var G__18785 = count__17406_18772;
var G__18786 = (i__17407_18773 + (1));
seq__17403_18770 = G__18783;
chunk__17405_18771 = G__18784;
count__17406_18772 = G__18785;
i__17407_18773 = G__18786;
continue;
}
} else {
var temp__5804__auto___18788__$1 = cljs.core.seq(seq__17403_18770);
if(temp__5804__auto___18788__$1){
var seq__17403_18789__$1 = temp__5804__auto___18788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17403_18789__$1)){
var c__5568__auto___18790 = cljs.core.chunk_first(seq__17403_18789__$1);
var G__18791 = cljs.core.chunk_rest(seq__17403_18789__$1);
var G__18792 = c__5568__auto___18790;
var G__18793 = cljs.core.count(c__5568__auto___18790);
var G__18794 = (0);
seq__17403_18770 = G__18791;
chunk__17405_18771 = G__18792;
count__17406_18772 = G__18793;
i__17407_18773 = G__18794;
continue;
} else {
var child_18795 = cljs.core.first(seq__17403_18789__$1);
if(cljs.core.truth_(child_18795)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18795);


var G__18797 = cljs.core.next(seq__17403_18789__$1);
var G__18798 = null;
var G__18800 = (0);
var G__18801 = (0);
seq__17403_18770 = G__18797;
chunk__17405_18771 = G__18798;
count__17406_18772 = G__18800;
i__17407_18773 = G__18801;
continue;
} else {
var G__18806 = cljs.core.next(seq__17403_18789__$1);
var G__18807 = null;
var G__18808 = (0);
var G__18809 = (0);
seq__17403_18770 = G__18806;
chunk__17405_18771 = G__18807;
count__17406_18772 = G__18808;
i__17407_18773 = G__18809;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18769);
}


var G__18811 = cljs.core.next(seq__17312_18760__$1);
var G__18812 = null;
var G__18813 = (0);
var G__18814 = (0);
seq__17312_18717 = G__18811;
chunk__17313_18718 = G__18812;
count__17314_18719 = G__18813;
i__17315_18720 = G__18814;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17449 = cljs.core.seq(node);
var chunk__17450 = null;
var count__17451 = (0);
var i__17452 = (0);
while(true){
if((i__17452 < count__17451)){
var n = chunk__17450.cljs$core$IIndexed$_nth$arity$2(null,i__17452);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18824 = seq__17449;
var G__18825 = chunk__17450;
var G__18826 = count__17451;
var G__18827 = (i__17452 + (1));
seq__17449 = G__18824;
chunk__17450 = G__18825;
count__17451 = G__18826;
i__17452 = G__18827;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17449);
if(temp__5804__auto__){
var seq__17449__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17449__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17449__$1);
var G__18830 = cljs.core.chunk_rest(seq__17449__$1);
var G__18831 = c__5568__auto__;
var G__18832 = cljs.core.count(c__5568__auto__);
var G__18833 = (0);
seq__17449 = G__18830;
chunk__17450 = G__18831;
count__17451 = G__18832;
i__17452 = G__18833;
continue;
} else {
var n = cljs.core.first(seq__17449__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18835 = cljs.core.next(seq__17449__$1);
var G__18836 = null;
var G__18837 = (0);
var G__18838 = (0);
seq__17449 = G__18835;
chunk__17450 = G__18836;
count__17451 = G__18837;
i__17452 = G__18838;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17473 = arguments.length;
switch (G__17473) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17480 = arguments.length;
switch (G__17480) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17502 = arguments.length;
switch (G__17502) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18862 = arguments.length;
var i__5770__auto___18863 = (0);
while(true){
if((i__5770__auto___18863 < len__5769__auto___18862)){
args__5775__auto__.push((arguments[i__5770__auto___18863]));

var G__18864 = (i__5770__auto___18863 + (1));
i__5770__auto___18863 = G__18864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17521_18867 = cljs.core.seq(nodes);
var chunk__17522_18868 = null;
var count__17523_18869 = (0);
var i__17524_18870 = (0);
while(true){
if((i__17524_18870 < count__17523_18869)){
var node_18871 = chunk__17522_18868.cljs$core$IIndexed$_nth$arity$2(null,i__17524_18870);
fragment.appendChild(shadow.dom._to_dom(node_18871));


var G__18872 = seq__17521_18867;
var G__18873 = chunk__17522_18868;
var G__18874 = count__17523_18869;
var G__18875 = (i__17524_18870 + (1));
seq__17521_18867 = G__18872;
chunk__17522_18868 = G__18873;
count__17523_18869 = G__18874;
i__17524_18870 = G__18875;
continue;
} else {
var temp__5804__auto___18876 = cljs.core.seq(seq__17521_18867);
if(temp__5804__auto___18876){
var seq__17521_18877__$1 = temp__5804__auto___18876;
if(cljs.core.chunked_seq_QMARK_(seq__17521_18877__$1)){
var c__5568__auto___18878 = cljs.core.chunk_first(seq__17521_18877__$1);
var G__18879 = cljs.core.chunk_rest(seq__17521_18877__$1);
var G__18880 = c__5568__auto___18878;
var G__18881 = cljs.core.count(c__5568__auto___18878);
var G__18882 = (0);
seq__17521_18867 = G__18879;
chunk__17522_18868 = G__18880;
count__17523_18869 = G__18881;
i__17524_18870 = G__18882;
continue;
} else {
var node_18883 = cljs.core.first(seq__17521_18877__$1);
fragment.appendChild(shadow.dom._to_dom(node_18883));


var G__18886 = cljs.core.next(seq__17521_18877__$1);
var G__18887 = null;
var G__18888 = (0);
var G__18889 = (0);
seq__17521_18867 = G__18886;
chunk__17522_18868 = G__18887;
count__17523_18869 = G__18888;
i__17524_18870 = G__18889;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17518){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17518));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17578_18890 = cljs.core.seq(scripts);
var chunk__17579_18891 = null;
var count__17580_18892 = (0);
var i__17581_18893 = (0);
while(true){
if((i__17581_18893 < count__17580_18892)){
var vec__17603_18894 = chunk__17579_18891.cljs$core$IIndexed$_nth$arity$2(null,i__17581_18893);
var script_tag_18895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17603_18894,(0),null);
var script_body_18896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17603_18894,(1),null);
eval(script_body_18896);


var G__18897 = seq__17578_18890;
var G__18898 = chunk__17579_18891;
var G__18899 = count__17580_18892;
var G__18900 = (i__17581_18893 + (1));
seq__17578_18890 = G__18897;
chunk__17579_18891 = G__18898;
count__17580_18892 = G__18899;
i__17581_18893 = G__18900;
continue;
} else {
var temp__5804__auto___18901 = cljs.core.seq(seq__17578_18890);
if(temp__5804__auto___18901){
var seq__17578_18902__$1 = temp__5804__auto___18901;
if(cljs.core.chunked_seq_QMARK_(seq__17578_18902__$1)){
var c__5568__auto___18903 = cljs.core.chunk_first(seq__17578_18902__$1);
var G__18904 = cljs.core.chunk_rest(seq__17578_18902__$1);
var G__18905 = c__5568__auto___18903;
var G__18906 = cljs.core.count(c__5568__auto___18903);
var G__18907 = (0);
seq__17578_18890 = G__18904;
chunk__17579_18891 = G__18905;
count__17580_18892 = G__18906;
i__17581_18893 = G__18907;
continue;
} else {
var vec__17614_18908 = cljs.core.first(seq__17578_18902__$1);
var script_tag_18909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17614_18908,(0),null);
var script_body_18910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17614_18908,(1),null);
eval(script_body_18910);


var G__18911 = cljs.core.next(seq__17578_18902__$1);
var G__18912 = null;
var G__18913 = (0);
var G__18914 = (0);
seq__17578_18890 = G__18911;
chunk__17579_18891 = G__18912;
count__17580_18892 = G__18913;
i__17581_18893 = G__18914;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17621){
var vec__17622 = p__17621;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17645 = arguments.length;
switch (G__17645) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17671 = cljs.core.seq(style_keys);
var chunk__17672 = null;
var count__17673 = (0);
var i__17674 = (0);
while(true){
if((i__17674 < count__17673)){
var it = chunk__17672.cljs$core$IIndexed$_nth$arity$2(null,i__17674);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18930 = seq__17671;
var G__18931 = chunk__17672;
var G__18932 = count__17673;
var G__18933 = (i__17674 + (1));
seq__17671 = G__18930;
chunk__17672 = G__18931;
count__17673 = G__18932;
i__17674 = G__18933;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17671);
if(temp__5804__auto__){
var seq__17671__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17671__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17671__$1);
var G__18934 = cljs.core.chunk_rest(seq__17671__$1);
var G__18935 = c__5568__auto__;
var G__18936 = cljs.core.count(c__5568__auto__);
var G__18937 = (0);
seq__17671 = G__18934;
chunk__17672 = G__18935;
count__17673 = G__18936;
i__17674 = G__18937;
continue;
} else {
var it = cljs.core.first(seq__17671__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18941 = cljs.core.next(seq__17671__$1);
var G__18942 = null;
var G__18943 = (0);
var G__18944 = (0);
seq__17671 = G__18941;
chunk__17672 = G__18942;
count__17673 = G__18943;
i__17674 = G__18944;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17684,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17695 = k17684;
var G__17695__$1 = (((G__17695 instanceof cljs.core.Keyword))?G__17695.fqn:null);
switch (G__17695__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17684,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17701){
var vec__17703 = p__17701;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17683){
var self__ = this;
var G__17683__$1 = this;
return (new cljs.core.RecordIter((0),G__17683__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17685,other17686){
var self__ = this;
var this17685__$1 = this;
return (((!((other17686 == null)))) && ((((this17685__$1.constructor === other17686.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17685__$1.x,other17686.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17685__$1.y,other17686.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17685__$1.__extmap,other17686.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17684){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17762 = k17684;
var G__17762__$1 = (((G__17762 instanceof cljs.core.Keyword))?G__17762.fqn:null);
switch (G__17762__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17684);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17683){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17764 = cljs.core.keyword_identical_QMARK_;
var expr__17765 = k__5352__auto__;
if(cljs.core.truth_((pred__17764.cljs$core$IFn$_invoke$arity$2 ? pred__17764.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17765) : pred__17764.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17765)))){
return (new shadow.dom.Coordinate(G__17683,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17764.cljs$core$IFn$_invoke$arity$2 ? pred__17764.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17765) : pred__17764.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17765)))){
return (new shadow.dom.Coordinate(self__.x,G__17683,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17683),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17683){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17683,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17688){
var extmap__5385__auto__ = (function (){var G__17788 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17688,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17688)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17788);
} else {
return G__17788;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17688),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17688),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17817,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17830 = k17817;
var G__17830__$1 = (((G__17830 instanceof cljs.core.Keyword))?G__17830.fqn:null);
switch (G__17830__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17817,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17838){
var vec__17840 = p__17838;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17816){
var self__ = this;
var G__17816__$1 = this;
return (new cljs.core.RecordIter((0),G__17816__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17818,other17819){
var self__ = this;
var this17818__$1 = this;
return (((!((other17819 == null)))) && ((((this17818__$1.constructor === other17819.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17818__$1.w,other17819.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17818__$1.h,other17819.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17818__$1.__extmap,other17819.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17817){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17897 = k17817;
var G__17897__$1 = (((G__17897 instanceof cljs.core.Keyword))?G__17897.fqn:null);
switch (G__17897__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17817);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17816){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17904 = cljs.core.keyword_identical_QMARK_;
var expr__17905 = k__5352__auto__;
if(cljs.core.truth_((pred__17904.cljs$core$IFn$_invoke$arity$2 ? pred__17904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17905) : pred__17904.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17905)))){
return (new shadow.dom.Size(G__17816,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17904.cljs$core$IFn$_invoke$arity$2 ? pred__17904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17905) : pred__17904.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17905)))){
return (new shadow.dom.Size(self__.w,G__17816,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17816),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17816){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17816,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17822){
var extmap__5385__auto__ = (function (){var G__17952 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17822,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17822)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17952);
} else {
return G__17952;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17822),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17822),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19009 = (i + (1));
var G__19010 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19009;
ret = G__19010;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17994){
var vec__17996 = p__17994;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18006 = arguments.length;
switch (G__18006) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19018 = ps;
var G__19019 = (i + (1));
el__$1 = G__19018;
i = G__19019;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18138 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18138,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18138,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18138,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18155_19024 = cljs.core.seq(props);
var chunk__18156_19025 = null;
var count__18157_19026 = (0);
var i__18158_19027 = (0);
while(true){
if((i__18158_19027 < count__18157_19026)){
var vec__18212_19028 = chunk__18156_19025.cljs$core$IIndexed$_nth$arity$2(null,i__18158_19027);
var k_19029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212_19028,(0),null);
var v_19030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212_19028,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19029);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19029),v_19030);


var G__19031 = seq__18155_19024;
var G__19032 = chunk__18156_19025;
var G__19033 = count__18157_19026;
var G__19034 = (i__18158_19027 + (1));
seq__18155_19024 = G__19031;
chunk__18156_19025 = G__19032;
count__18157_19026 = G__19033;
i__18158_19027 = G__19034;
continue;
} else {
var temp__5804__auto___19035 = cljs.core.seq(seq__18155_19024);
if(temp__5804__auto___19035){
var seq__18155_19036__$1 = temp__5804__auto___19035;
if(cljs.core.chunked_seq_QMARK_(seq__18155_19036__$1)){
var c__5568__auto___19037 = cljs.core.chunk_first(seq__18155_19036__$1);
var G__19038 = cljs.core.chunk_rest(seq__18155_19036__$1);
var G__19039 = c__5568__auto___19037;
var G__19040 = cljs.core.count(c__5568__auto___19037);
var G__19041 = (0);
seq__18155_19024 = G__19038;
chunk__18156_19025 = G__19039;
count__18157_19026 = G__19040;
i__18158_19027 = G__19041;
continue;
} else {
var vec__18232_19042 = cljs.core.first(seq__18155_19036__$1);
var k_19043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18232_19042,(0),null);
var v_19044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18232_19042,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19043);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19043),v_19044);


var G__19047 = cljs.core.next(seq__18155_19036__$1);
var G__19048 = null;
var G__19049 = (0);
var G__19050 = (0);
seq__18155_19024 = G__19047;
chunk__18156_19025 = G__19048;
count__18157_19026 = G__19049;
i__18158_19027 = G__19050;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18271 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18271,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18271,(1),null);
var seq__18275_19052 = cljs.core.seq(node_children);
var chunk__18277_19053 = null;
var count__18278_19054 = (0);
var i__18279_19055 = (0);
while(true){
if((i__18279_19055 < count__18278_19054)){
var child_struct_19056 = chunk__18277_19053.cljs$core$IIndexed$_nth$arity$2(null,i__18279_19055);
if((!((child_struct_19056 == null)))){
if(typeof child_struct_19056 === 'string'){
var text_19057 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19057),child_struct_19056].join(''));
} else {
var children_19059 = shadow.dom.svg_node(child_struct_19056);
if(cljs.core.seq_QMARK_(children_19059)){
var seq__18405_19061 = cljs.core.seq(children_19059);
var chunk__18407_19062 = null;
var count__18408_19063 = (0);
var i__18409_19064 = (0);
while(true){
if((i__18409_19064 < count__18408_19063)){
var child_19065 = chunk__18407_19062.cljs$core$IIndexed$_nth$arity$2(null,i__18409_19064);
if(cljs.core.truth_(child_19065)){
node.appendChild(child_19065);


var G__19066 = seq__18405_19061;
var G__19067 = chunk__18407_19062;
var G__19068 = count__18408_19063;
var G__19069 = (i__18409_19064 + (1));
seq__18405_19061 = G__19066;
chunk__18407_19062 = G__19067;
count__18408_19063 = G__19068;
i__18409_19064 = G__19069;
continue;
} else {
var G__19070 = seq__18405_19061;
var G__19071 = chunk__18407_19062;
var G__19072 = count__18408_19063;
var G__19073 = (i__18409_19064 + (1));
seq__18405_19061 = G__19070;
chunk__18407_19062 = G__19071;
count__18408_19063 = G__19072;
i__18409_19064 = G__19073;
continue;
}
} else {
var temp__5804__auto___19074 = cljs.core.seq(seq__18405_19061);
if(temp__5804__auto___19074){
var seq__18405_19075__$1 = temp__5804__auto___19074;
if(cljs.core.chunked_seq_QMARK_(seq__18405_19075__$1)){
var c__5568__auto___19076 = cljs.core.chunk_first(seq__18405_19075__$1);
var G__19077 = cljs.core.chunk_rest(seq__18405_19075__$1);
var G__19078 = c__5568__auto___19076;
var G__19079 = cljs.core.count(c__5568__auto___19076);
var G__19080 = (0);
seq__18405_19061 = G__19077;
chunk__18407_19062 = G__19078;
count__18408_19063 = G__19079;
i__18409_19064 = G__19080;
continue;
} else {
var child_19081 = cljs.core.first(seq__18405_19075__$1);
if(cljs.core.truth_(child_19081)){
node.appendChild(child_19081);


var G__19082 = cljs.core.next(seq__18405_19075__$1);
var G__19083 = null;
var G__19084 = (0);
var G__19085 = (0);
seq__18405_19061 = G__19082;
chunk__18407_19062 = G__19083;
count__18408_19063 = G__19084;
i__18409_19064 = G__19085;
continue;
} else {
var G__19087 = cljs.core.next(seq__18405_19075__$1);
var G__19088 = null;
var G__19089 = (0);
var G__19090 = (0);
seq__18405_19061 = G__19087;
chunk__18407_19062 = G__19088;
count__18408_19063 = G__19089;
i__18409_19064 = G__19090;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19059);
}
}


var G__19092 = seq__18275_19052;
var G__19093 = chunk__18277_19053;
var G__19094 = count__18278_19054;
var G__19095 = (i__18279_19055 + (1));
seq__18275_19052 = G__19092;
chunk__18277_19053 = G__19093;
count__18278_19054 = G__19094;
i__18279_19055 = G__19095;
continue;
} else {
var G__19097 = seq__18275_19052;
var G__19098 = chunk__18277_19053;
var G__19099 = count__18278_19054;
var G__19100 = (i__18279_19055 + (1));
seq__18275_19052 = G__19097;
chunk__18277_19053 = G__19098;
count__18278_19054 = G__19099;
i__18279_19055 = G__19100;
continue;
}
} else {
var temp__5804__auto___19101 = cljs.core.seq(seq__18275_19052);
if(temp__5804__auto___19101){
var seq__18275_19103__$1 = temp__5804__auto___19101;
if(cljs.core.chunked_seq_QMARK_(seq__18275_19103__$1)){
var c__5568__auto___19104 = cljs.core.chunk_first(seq__18275_19103__$1);
var G__19105 = cljs.core.chunk_rest(seq__18275_19103__$1);
var G__19106 = c__5568__auto___19104;
var G__19107 = cljs.core.count(c__5568__auto___19104);
var G__19108 = (0);
seq__18275_19052 = G__19105;
chunk__18277_19053 = G__19106;
count__18278_19054 = G__19107;
i__18279_19055 = G__19108;
continue;
} else {
var child_struct_19109 = cljs.core.first(seq__18275_19103__$1);
if((!((child_struct_19109 == null)))){
if(typeof child_struct_19109 === 'string'){
var text_19110 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19110),child_struct_19109].join(''));
} else {
var children_19111 = shadow.dom.svg_node(child_struct_19109);
if(cljs.core.seq_QMARK_(children_19111)){
var seq__18448_19112 = cljs.core.seq(children_19111);
var chunk__18450_19113 = null;
var count__18451_19114 = (0);
var i__18452_19115 = (0);
while(true){
if((i__18452_19115 < count__18451_19114)){
var child_19116 = chunk__18450_19113.cljs$core$IIndexed$_nth$arity$2(null,i__18452_19115);
if(cljs.core.truth_(child_19116)){
node.appendChild(child_19116);


var G__19117 = seq__18448_19112;
var G__19118 = chunk__18450_19113;
var G__19119 = count__18451_19114;
var G__19120 = (i__18452_19115 + (1));
seq__18448_19112 = G__19117;
chunk__18450_19113 = G__19118;
count__18451_19114 = G__19119;
i__18452_19115 = G__19120;
continue;
} else {
var G__19121 = seq__18448_19112;
var G__19122 = chunk__18450_19113;
var G__19123 = count__18451_19114;
var G__19124 = (i__18452_19115 + (1));
seq__18448_19112 = G__19121;
chunk__18450_19113 = G__19122;
count__18451_19114 = G__19123;
i__18452_19115 = G__19124;
continue;
}
} else {
var temp__5804__auto___19125__$1 = cljs.core.seq(seq__18448_19112);
if(temp__5804__auto___19125__$1){
var seq__18448_19126__$1 = temp__5804__auto___19125__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18448_19126__$1)){
var c__5568__auto___19127 = cljs.core.chunk_first(seq__18448_19126__$1);
var G__19129 = cljs.core.chunk_rest(seq__18448_19126__$1);
var G__19130 = c__5568__auto___19127;
var G__19131 = cljs.core.count(c__5568__auto___19127);
var G__19132 = (0);
seq__18448_19112 = G__19129;
chunk__18450_19113 = G__19130;
count__18451_19114 = G__19131;
i__18452_19115 = G__19132;
continue;
} else {
var child_19135 = cljs.core.first(seq__18448_19126__$1);
if(cljs.core.truth_(child_19135)){
node.appendChild(child_19135);


var G__19136 = cljs.core.next(seq__18448_19126__$1);
var G__19137 = null;
var G__19138 = (0);
var G__19139 = (0);
seq__18448_19112 = G__19136;
chunk__18450_19113 = G__19137;
count__18451_19114 = G__19138;
i__18452_19115 = G__19139;
continue;
} else {
var G__19140 = cljs.core.next(seq__18448_19126__$1);
var G__19141 = null;
var G__19142 = (0);
var G__19143 = (0);
seq__18448_19112 = G__19140;
chunk__18450_19113 = G__19141;
count__18451_19114 = G__19142;
i__18452_19115 = G__19143;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19111);
}
}


var G__19144 = cljs.core.next(seq__18275_19103__$1);
var G__19145 = null;
var G__19146 = (0);
var G__19147 = (0);
seq__18275_19052 = G__19144;
chunk__18277_19053 = G__19145;
count__18278_19054 = G__19146;
i__18279_19055 = G__19147;
continue;
} else {
var G__19148 = cljs.core.next(seq__18275_19103__$1);
var G__19149 = null;
var G__19150 = (0);
var G__19151 = (0);
seq__18275_19052 = G__19148;
chunk__18277_19053 = G__19149;
count__18278_19054 = G__19150;
i__18279_19055 = G__19151;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19154 = arguments.length;
var i__5770__auto___19155 = (0);
while(true){
if((i__5770__auto___19155 < len__5769__auto___19154)){
args__5775__auto__.push((arguments[i__5770__auto___19155]));

var G__19157 = (i__5770__auto___19155 + (1));
i__5770__auto___19155 = G__19157;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18482){
var G__18483 = cljs.core.first(seq18482);
var seq18482__$1 = cljs.core.next(seq18482);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18483,seq18482__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18504 = arguments.length;
switch (G__18504) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13519__auto___19171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13520__auto__ = (function (){var switch__12930__auto__ = (function (state_18546){
var state_val_18547 = (state_18546[(1)]);
if((state_val_18547 === (1))){
var state_18546__$1 = state_18546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18546__$1,(2),once_or_cleanup);
} else {
if((state_val_18547 === (2))){
var inst_18542 = (state_18546[(2)]);
var inst_18543 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18546__$1 = (function (){var statearr_18549 = state_18546;
(statearr_18549[(7)] = inst_18542);

return statearr_18549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18546__$1,inst_18543);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12931__auto__ = null;
var shadow$dom$state_machine__12931__auto____0 = (function (){
var statearr_18553 = [null,null,null,null,null,null,null,null];
(statearr_18553[(0)] = shadow$dom$state_machine__12931__auto__);

(statearr_18553[(1)] = (1));

return statearr_18553;
});
var shadow$dom$state_machine__12931__auto____1 = (function (state_18546){
while(true){
var ret_value__12932__auto__ = (function (){try{while(true){
var result__12933__auto__ = switch__12930__auto__(state_18546);
if(cljs.core.keyword_identical_QMARK_(result__12933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12933__auto__;
}
break;
}
}catch (e18554){var ex__12934__auto__ = e18554;
var statearr_18555_19177 = state_18546;
(statearr_18555_19177[(2)] = ex__12934__auto__);


if(cljs.core.seq((state_18546[(4)]))){
var statearr_18562_19178 = state_18546;
(statearr_18562_19178[(1)] = cljs.core.first((state_18546[(4)])));

} else {
throw ex__12934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19179 = state_18546;
state_18546 = G__19179;
continue;
} else {
return ret_value__12932__auto__;
}
break;
}
});
shadow$dom$state_machine__12931__auto__ = function(state_18546){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12931__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12931__auto____1.call(this,state_18546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12931__auto____0;
shadow$dom$state_machine__12931__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12931__auto____1;
return shadow$dom$state_machine__12931__auto__;
})()
})();
var state__13521__auto__ = (function (){var statearr_18568 = f__13520__auto__();
(statearr_18568[(6)] = c__13519__auto___19171);

return statearr_18568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13521__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
