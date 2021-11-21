(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.yidash = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	var root$8 = freeGlobal || freeSelf || Function('return this')();
	var _root = root$8;

	var root$7 = _root;
	var Symbol$4 = root$7.Symbol;
	var _Symbol = Symbol$4;

	var Symbol$3 = _Symbol;
	var objectProto$5 = Object.prototype;
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
	var nativeObjectToString$1 = objectProto$5.toString;
	var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];
	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}
	var _getRawTag = getRawTag$1;

	var objectProto$4 = Object.prototype;
	var nativeObjectToString = objectProto$4.toString;
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}
	var _objectToString = objectToString$1;

	var Symbol$2 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;
	function baseGetTag$3(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	var _baseGetTag = baseGetTag$3;

	function isObject$2(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	var isObject_1 = isObject$2;

	var baseGetTag$2 = _baseGetTag,
	    isObject$1 = isObject_1;
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	function isFunction$1(value) {
	  if (!isObject$1(value)) {
	    return false;
	  }
	  var tag = baseGetTag$2(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	var isFunction_1 = isFunction$1;

	var root$6 = _root;
	var coreJsData$1 = root$6['__core-js_shared__'];
	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	var _isMasked = isMasked$1;

	var funcProto$1 = Function.prototype;
	var funcToString$1 = funcProto$1.toString;
	function toSource$2(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	var _toSource = toSource$2;

	var isFunction = isFunction_1,
	    isMasked = _isMasked,
	    isObject = isObject_1,
	    toSource$1 = _toSource;
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var funcProto = Function.prototype,
	    objectProto$3 = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	function baseIsNative$1(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource$1(value));
	}
	var _baseIsNative = baseIsNative$1;

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}
	var _getValue = getValue$1;

	var baseIsNative = _baseIsNative,
	    getValue = _getValue;
	function getNative$7(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	var _getNative = getNative$7;

	var getNative$6 = _getNative;
	((function() {
	  try {
	    var func = getNative$6(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	})());

	function isObjectLike$2(value) {
	  return value != null && typeof value == 'object';
	}
	var isObjectLike_1 = isObjectLike$2;

	var baseGetTag$1 = _baseGetTag,
	    isObjectLike$1 = isObjectLike_1;
	var argsTag = '[object Arguments]';
	function baseIsArguments$1(value) {
	  return isObjectLike$1(value) && baseGetTag$1(value) == argsTag;
	}
	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike = isObjectLike_1;
	var objectProto$2 = Object.prototype;
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
	var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
	baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isBuffer = {exports: {}};

	function stubFalse() {
	  return false;
	}
	var stubFalse_1 = stubFalse;

	(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;
	var freeExports = exports && !exports.nodeType && exports;
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	var moduleExports = freeModule && freeModule.exports === freeExports;
	var Buffer = moduleExports ? root.Buffer : undefined;
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	var isBuffer = nativeIsBuffer || stubFalse;
	module.exports = isBuffer;
	}(isBuffer, isBuffer.exports));

	var _nodeUtil = {exports: {}};

	(function (module, exports) {
	var freeGlobal = _freeGlobal;
	var freeExports = exports && !exports.nodeType && exports;
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	var moduleExports = freeModule && freeModule.exports === freeExports;
	var freeProcess = moduleExports && freeGlobal.process;
	var nodeUtil = (function() {
	  try {
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	    if (types) {
	      return types;
	    }
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	module.exports = nodeUtil;
	}(_nodeUtil, _nodeUtil.exports));

	var nodeUtil = _nodeUtil.exports;
	nodeUtil && nodeUtil.isTypedArray;

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}
	var _listCacheClear = listCacheClear$1;

	function eq$1(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	var eq_1 = eq$1;

	var eq = eq_1;
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;
	var arrayProto = Array.prototype;
	var splice = arrayProto.splice;
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);
	  return index < 0 ? undefined : data[index][1];
	}
	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}
	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;
	function ListCache$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	ListCache$1.prototype.clear = listCacheClear;
	ListCache$1.prototype['delete'] = listCacheDelete;
	ListCache$1.prototype.get = listCacheGet;
	ListCache$1.prototype.has = listCacheHas;
	ListCache$1.prototype.set = listCacheSet;
	var _ListCache = ListCache$1;

	var getNative$5 = _getNative,
	    root$5 = _root;
	var Map$2 = getNative$5(root$5, 'Map');
	var _Map = Map$2;

	var getNative$4 = _getNative;
	var nativeCreate$4 = getNative$4(Object, 'create');
	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}
	var _hashClear = hashClear$1;

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
	var objectProto$1 = Object.prototype;
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$1 ? undefined : result;
	  }
	  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
	}
	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;
	var objectProto = Object.prototype;
	var hasOwnProperty = objectProto.hasOwnProperty;
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;
	var _Hash = Hash$1;

	var Hash = _Hash,
	    ListCache = _ListCache,
	    Map$1 = _Map;
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$1 || ListCache),
	    'string': new Hash
	  };
	}
	var _mapCacheClear = mapCacheClear$1;

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}
	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}
	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;
	function MapCache$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	MapCache$1.prototype.clear = mapCacheClear;
	MapCache$1.prototype['delete'] = mapCacheDelete;
	MapCache$1.prototype.get = mapCacheGet;
	MapCache$1.prototype.has = mapCacheHas;
	MapCache$1.prototype.set = mapCacheSet;
	var _MapCache = MapCache$1;

	var root$4 = _root;
	root$4.Uint8Array;

	var Symbol$1 = _Symbol;
	var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined;
	    symbolProto$1 ? symbolProto$1.valueOf : undefined;

	var getNative$3 = _getNative,
	    root$3 = _root;
	var DataView$1 = getNative$3(root$3, 'DataView');
	var _DataView = DataView$1;

	var getNative$2 = _getNative,
	    root$2 = _root;
	var Promise$2 = getNative$2(root$2, 'Promise');
	var _Promise = Promise$2;

	var getNative$1 = _getNative,
	    root$1 = _root;
	var Set$1 = getNative$1(root$1, 'Set');
	var _Set = Set$1;

	var getNative = _getNative,
	    root = _root;
	var WeakMap$1 = getNative(root, 'WeakMap');
	var _WeakMap = WeakMap$1;

	var DataView = _DataView,
	    Map = _Map,
	    Promise$1 = _Promise,
	    Set = _Set,
	    WeakMap = _WeakMap,
	    baseGetTag = _baseGetTag,
	    toSource = _toSource;
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	var dataViewTag = '[object DataView]';
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	var getTag = baseGetTag;
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	var MapCache = _MapCache;
	var FUNC_ERROR_TEXT = 'Expected a function';
	function memoize$1(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize$1.Cache || MapCache);
	  return memoized;
	}
	memoize$1.Cache = MapCache;
	var memoize_1 = memoize$1;

	var memoize = memoize_1;
	var MAX_MEMOIZE_SIZE = 500;
	function memoizeCapped$1(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	  var cache = result.cache;
	  return result;
	}
	var _memoizeCapped = memoizeCapped$1;

	var memoizeCapped = _memoizeCapped;
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	var reEscapeChar = /\\(\\)?/g;
	memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 ) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var Symbol = _Symbol;
	var symbolProto = Symbol ? Symbol.prototype : undefined;
	    symbolProto ? symbolProto.toString : undefined;

	function treeData(arrays, idName = "id", pidName = "pid", children = "children") {
	    let menuObject = _keyBy(arrays, idName);
	    let menuArray = [];
	    arrays.forEach((item) => {
	        let parent = menuObject[item[pidName]];
	        if (parent) {
	            if (!parent[children]) {
	                parent[children] = [];
	            }
	            parent[children].push(item);
	        } else {
	            menuArray.push(item);
	        }
	    });
	    return menuArray;
	}

	function plus(x, y) {
	    return x + y;
	}

	exports.plus = plus;
	exports.treeData = treeData;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
