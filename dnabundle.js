
(function() {
  var X, Y, Z, ZZ, ZZZ, cache, diranme, expand, modules, partial, dna_require;

  if (!this.dna_require) {
    modules = {};
    cache = {};
    X = '.';
    Y = '/';
    Z = 'in';
    ZZ = 'dex';
    ZZZ = X + Y + Z + ZZ;
    partial = function(fn) {
      var partial_args;
      partial_args = Array.prototype.slice.call(arguments);
      partial_args.shift();
      return function() {
        var a, arg, i, new_args, _i, _len, _ref;
        _ref = [[], 0], new_args = _ref[0], arg = _ref[1];
        for (i = _i = 0, _len = partial_args.length; _i < _len; i = ++_i) {
          a = partial_args[i];
          if (partial_args[i] === void 0) {
            new_args.push(arguments[arg++]);
          } else {
            new_args.push(partial_args[i]);
          }
        }
        return fn.apply(this, new_args);
      };
    };
    dna_require = function(name, root, ns) {
      var e, fn, module, ns_module, ns_path, path, top_level_module;
      path = expand(root, name);
      ns_path = "" + ns + "/" + (expand('', name));
      top_level_module = modules[path] || modules[expand(path, ZZZ)];
      if (ns && !top_level_module) {
        path = ns_path;
      }
      ns_module = modules[ns_path] || modules[expand(ns_path, ZZZ)];
      if (ns && top_level_module && ns_module) {
        path = "" + ns + "/" + (expand('', name));
      }
      module = cache[path] || cache[expand(path, ZZZ)];
      if (module) {
        return module.exports;
      } else if (fn = modules[path] || modules[path = expand(path, ZZZ)]) {
        module = {
          id: path,
          exports: {}
        };
        try {
          cache[path] = module;
          fn(module.exports, module);
          return module.exports;
        } catch (_error) {
          e = _error;
          delete cache[path];
          throw e;
        }
      } else {
        throw "module '" + name + "' is not found";
      }
    };
    dna_require.modules = function() {
      return modules;
    };
    expand = function(root, name) {
      var i, part, parts, results, _i, _ref;
      results = [];
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (i = _i = 0, _ref = parts.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        part = parts[i];
        if (part === '..') {
          results.pop();
        } else if (part !== '.' && part !== '') {
          results.push(part);
        }
      }
      return results.join('/');
    };
    diranme = function(path) {
      return path.split('/').slice(0).join('/');
    };
    this.dna_require = function(name) {
        if (!name) { name = 'dnawrapper' }
        return dna_require(name, '');
    };
    this.dna_require.modules = function() {
      return dna_require.modules();
    };
    this.dna_require.cache = function() {
      return cache;
    };
    this.dna_require.define = function(ns, bundle) {
      var key, value, _key, _require;
      _require = partial(dna_require, void 0, void 0, ns);
      _require.modules = dna_require.modules;
      for (key in bundle) {
        value = bundle[key];
        _key = ns ? "" + ns + "/" + key : key;
        modules[_key] = partial(value, void 0, _require, void 0);
        void 0;
      }
      return void 0;
    };
  }

}).call(this);

dna_require.define('', {
    'jquery': function (exports, dna_require, module) {
        (function () {
            (function () {
                module.exports = window.jQuery;
            }.call(this));
        }.call(this));
    }
});
dna_require.define('', {
    'commonjs-jquery': function (exports, dna_require, module) {
        (function () {
            (function () {
                module.exports = window.jQuery;
            }.call(this));
        }.call(this));
    }
});
dna_require.define('dc-idom', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var $, IDom, debug, dispatch_impl, error, in_subtree, info, is_array, is_function, jqidom, warn, _ref, _ref1, __indexOf = [].indexOf || function (item) {
                        for (var i = 0, l = this.length; i < l; i++) {
                            if (i in this && this[i] === item)
                                return i;
                        }
                        return -1;
                    }, __slice = [].slice;
                dispatch_impl = dna_require('libprotocol').dispatch_impl;
                _ref = dispatch_impl('ILogger', 'IDom'), info = _ref.info, warn = _ref.warn, error = _ref.error, debug = _ref.debug;
                _ref1 = dna_require('libprotein'), is_array = _ref1.is_array, is_function = _ref1.is_function;
                $ = dna_require('commonjs-jquery');
                IDom = [
                    [
                        'set-html!',
                        ['new_content']
                    ],
                    [
                        'html',
                        ['new_content']
                    ],
                    [
                        'get-html',
                        []
                    ],
                    [
                        'setValue',
                        ['new_value']
                    ],
                    [
                        'setText',
                        ['text']
                    ],
                    [
                        'getValue',
                        []
                    ],
                    [
                        'alert',
                        ['msg']
                    ],
                    [
                        'click',
                        ['handler']
                    ],
                    [
                        'click-once',
                        ['handler']
                    ],
                    [
                        'globalclick',
                        ['handler']
                    ],
                    [
                        'keyDown',
                        ['handler']
                    ],
                    [
                        'keyUp',
                        ['handler']
                    ],
                    [
                        'globalKeyDown',
                        ['handler']
                    ],
                    [
                        'on_change',
                        ['handler']
                    ],
                    [
                        'change',
                        ['handler']
                    ],
                    [
                        'appendContent',
                        ['content']
                    ],
                    [
                        'kill',
                        []
                    ],
                    [
                        'kill-9',
                        []
                    ],
                    [
                        'stop_event',
                        ['e']
                    ],
                    [
                        'setAttr',
                        [
                            'attr',
                            'value'
                        ]
                    ],
                    [
                        'getAttr',
                        ['attr']
                    ],
                    [
                        'dbclick',
                        ['e']
                    ],
                    [
                        'focusout',
                        ['e']
                    ],
                    [
                        'focusin',
                        ['handler']
                    ],
                    [
                        'focus',
                        []
                    ],
                    [
                        'select',
                        []
                    ],
                    [
                        'mouse_enter',
                        ['handler']
                    ],
                    [
                        'mouseout',
                        ['handler']
                    ],
                    [
                        'get_by_attr',
                        ['attr']
                    ],
                    [
                        'get_by_id',
                        ['id']
                    ],
                    [
                        'getData',
                        [
                            'attr',
                            'node'
                        ]
                    ],
                    [
                        'get_id',
                        ['node']
                    ],
                    [
                        'disable',
                        []
                    ],
                    [
                        'enable',
                        []
                    ],
                    [
                        'canWrite',
                        []
                    ],
                    [
                        'readonly',
                        []
                    ],
                    [
                        'on_dom_ready',
                        ['f']
                    ],
                    [
                        'one',
                        ['sel']
                    ],
                    [
                        'document',
                        []
                    ],
                    [
                        'get_root_node',
                        []
                    ],
                    [
                        'add_event_listener',
                        [
                            'event_name',
                            'handler'
                        ]
                    ],
                    [
                        'trigger',
                        [
                            'event',
                            'args'
                        ]
                    ],
                    [
                        'on_document_loaded',
                        ['f']
                    ],
                    [
                        'addClass',
                        ['cls']
                    ],
                    [
                        'removeClass',
                        ['cls']
                    ],
                    [
                        'toggleClass',
                        ['from_to']
                    ],
                    [
                        'toggleText',
                        [
                            'x',
                            'y'
                        ]
                    ],
                    [
                        'css',
                        [
                            'attr',
                            'value'
                        ]
                    ],
                    [
                        'data',
                        []
                    ],
                    [
                        'data-key',
                        ['key'],
                        { doc: 'Returns key from data attrs' }
                    ],
                    [
                        'target',
                        ['ev']
                    ],
                    [
                        'current-target',
                        ['ev']
                    ],
                    [
                        'is_in',
                        [
                            'subtree',
                            'ev'
                        ]
                    ],
                    [
                        'parent',
                        []
                    ],
                    [
                        'text!',
                        ['text']
                    ],
                    [
                        'append-to',
                        [
                            'to_sel',
                            'which_sel'
                        ]
                    ],
                    [
                        'click!',
                        ['orig_ev']
                    ],
                    [
                        'get_form_data',
                        []
                    ],
                    [
                        'preventDefault',
                        ['ev']
                    ],
                    [
                        'prepend',
                        ['content']
                    ],
                    [
                        'click-delegate',
                        [
                            'selector',
                            'handler'
                        ]
                    ],
                    [
                        'hover-delegate',
                        [
                            'selector',
                            'handler'
                        ]
                    ],
                    [
                        'delegate',
                        [
                            'action',
                            'selector',
                            'handler'
                        ]
                    ],
                    [
                        'global-key',
                        [
                            'keys',
                            'handler'
                        ]
                    ],
                    [
                        'if-checked?',
                        []
                    ],
                    [
                        'if-unchecked?',
                        []
                    ],
                    [
                        'submit',
                        []
                    ],
                    [
                        'scrollToId',
                        [
                            'id',
                            'delta',
                            'speed'
                        ]
                    ],
                    [
                        'eq',
                        [
                            'x',
                            'y'
                        ]
                    ]
                ];
                in_subtree = function ($node, target) {
                    if (!!$node.find(target).length || $node.is(target)) {
                        return true;
                    } else {
                        return false;
                    }
                };
                jqidom = function (node) {
                    var $node;
                    $node = $(node);
                    return {
                        'global-key': function (key, h) {
                            var keys;
                            keys = is_array(key) ? key : [key];
                            return $(document).bind('keydown', function (ev) {
                                var _ref2;
                                if (_ref2 = ev.which, __indexOf.call(keys, _ref2) >= 0) {
                                    return h(ev.which);
                                }
                            });
                        },
                        'click-delegate': function (sel, handler) {
                            var real_sel;
                            real_sel = is_function(sel) ? sel() : sel;
                            return $(real_sel).click(handler);
                        },
                        'hover-delegate': function (sel, handler) {
                            var real_sel;
                            real_sel = is_function(sel) ? sel() : sel;
                            return $(real_sel).mouseenter(handler);
                        },
                        delegate: function (action, selector, handler) {
                            return $(selector).on(action, handler);
                        },
                        preventDefault: function (ev) {
                            return ev.preventDefault();
                        },
                        get_form_data: function () {
                            return $node.serializeObject();
                        },
                        prepend: function (content) {
                            return $node.prepend(content);
                        },
                        'click!': function (orig_ev) {
                            return $node.click();
                        },
                        mouseout: function (handler) {
                            return $node.mouseleave(handler);
                        },
                        'append-to': function (to_sel, which_sel) {
                            return $(which_sel).appendTo(to_sel);
                        },
                        'text!': function (t) {
                            return $node.text(t);
                        },
                        disable: function () {
                            return $node.attr('disabled', 'disabled');
                        },
                        enable: function () {
                            return $node.removeAttr('disabled');
                        },
                        data: function () {
                            return $node.data();
                        },
                        'data-key': function (key) {
                            return $node.data(key);
                        },
                        parent: function () {
                            return $node.parent();
                        },
                        target: function (ev) {
                            return ev.target;
                        },
                        'current-target': function (ev) {
                            return ev.currentTarget;
                        },
                        is_in: function (subtrees, target_node) {
                            var elid, _i, _len;
                            for (_i = 0, _len = subtrees.length; _i < _len; _i++) {
                                elid = subtrees[_i];
                                $node = elid === 'this' ? $node : $('#' + elid);
                                if (in_subtree($node, target_node)) {
                                    return true;
                                }
                            }
                            return false;
                        },
                        'set-html!': function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return $node.html(args.join(''));
                        },
                        html: function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return $node.html(args.join(''));
                        },
                        'get-html': function () {
                            return $node.html();
                        },
                        setValue: function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return $node.val(args.join(''));
                        },
                        setText: function (text) {
                            return $node.text(text);
                        },
                        getValue: function () {
                            if ($node.prop('tagName').toLowerCase() === 'span') {
                                return $node.text();
                            } else {
                                return $node.val();
                            }
                        },
                        setAttr: function (attr, value) {
                            return $node.attr(attr, value);
                        },
                        getAttr: function (name) {
                            return $node.attr(name);
                        },
                        appendContent: function (content) {
                            return $node.append('<div>' + content + '</div>');
                        },
                        alert: function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return alert.apply(null, args);
                        },
                        click: function (handler) {
                            return $node.click(handler);
                        },
                        'click-once': function (handler) {
                            return $node.one('click', handler);
                        },
                        globalclick: function (handler) {
                            return $(document).click(handler);
                        },
                        kill: function () {
                            return $node.remove();
                        },
                        'kill-9': function () {
                            var dna;
                            dna = dna_require('dna-lang');
                            dna.forget_cell(node.id);
                            return $node.remove();
                        },
                        stop_event: function (e) {
                            return $.Event(e).stopPropagation();
                        },
                        keyDown: function (handler) {
                            return $node.bind('keydown', handler);
                        },
                        keyUp: function (handler) {
                            return $node.bind('keyup', handler);
                        },
                        globalKeyDown: function (handler) {
                            return $(document).bind('keydown', handler);
                        },
                        on_change: function (handler) {
                            return $node.bind('onchange', handler);
                        },
                        change: function (handler) {
                            return $node.change(handler);
                        },
                        dbclick: function (handler) {
                            return $node.dblclick(handler);
                        },
                        focusout: function (handler) {
                            return $node.blur(handler);
                        },
                        focusin: function (handler) {
                            return $node.focus(handler);
                        },
                        focus: function () {
                            return $node.focus();
                        },
                        select: function () {
                            return $node.select();
                        },
                        mouse_enter: function (handler) {
                            return $node.mouseenter(handler);
                        },
                        get_by_attr: function (attr) {
                            var e, r1;
                            r1 = function () {
                                try {
                                    if ($node.is(attr)) {
                                        return [$node];
                                    } else {
                                        return [];
                                    }
                                } catch (_error) {
                                    e = _error;
                                    return [];
                                }
                            }();
                            return r1.concat($node.find(attr).toArray());
                        },
                        get_by_id: function (id) {
                            return $('#' + id);
                        },
                        getData: function (attr, node) {
                            if (node == null) {
                                node = $node;
                            }
                            return $(node).data(attr);
                        },
                        get_id: function (node) {
                            if (node == null) {
                                node = $node;
                            }
                            return $(node).attr('id');
                        },
                        on_dom_ready: function (f) {
                            return $(document).ready(f);
                        },
                        on_document_loaded: function (f) {
                            return $(window).load(f);
                        },
                        canWrite: function () {
                            return $node.removeAttr('readonly');
                        },
                        readonly: function () {
                            return $node.attr('readonly', 'readonly');
                        },
                        one: function (sel) {
                            return $(sel);
                        },
                        document: function () {
                            return window.document;
                        },
                        get_root_node: function () {
                            return node;
                        },
                        add_event_listener: function (event_name, handler) {
                            if (node.addEventListener) {
                                return node.addEventListener(event_name, handler);
                            } else if (node.attachEvent) {
                                return node.attachEvent('on' + event_name, handler);
                            } else {
                                error('Can\'t add event listener: no addEventListener nor attachEvent present', event_name, node);
                                throw 'Can\'t add event listener: no addEventListener nor attachEvent present';
                            }
                        },
                        trigger: function (event, args) {
                            return $node.trigger(event, args);
                        },
                        addClass: function (cls) {
                            return $node.addClass(cls);
                        },
                        removeClass: function (cls) {
                            return $node.removeClass(cls);
                        },
                        toggleClass: function (_arg) {
                            var from, to;
                            from = _arg[0], to = _arg[1];
                            if ($node.hasClass(from)) {
                                $node.removeClass(from);
                                return $node.addClass(to);
                            } else {
                                $node.removeClass(to);
                                return $node.addClass(from);
                            }
                        },
                        toggleText: function (x, y) {
                            if (x === $node.text()) {
                                return $node.text(y);
                            } else {
                                return $node.text(x);
                            }
                        },
                        'if-checked?': function () {
                            if ($node.attr('checked') === 'checked') {
                                return true;
                            } else {
                                return null;
                            }
                        },
                        'if-unchecked?': function () {
                            if ($node.attr('checked') !== 'checked') {
                                return true;
                            } else {
                                return null;
                            }
                        },
                        css: function (attr, value) {
                            return $node.css(attr, value);
                        },
                        submit: function () {
                            return $node.submit();
                        },
                        scrollToId: function (id, delta, speed) {
                            return $('html, body').animate({ scrollTop: $('#' + id).offset().top - delta }, speed);
                        },
                        eq: function (x, y) {
                            return x === y || null;
                        }
                    };
                };
                module.exports = {
                    protocols: {
                        definitions: { IDom: IDom },
                        implementations: { IDom: jqidom }
                    }
                };
            }.call(this));
        }.call(this));
    }
});

dna_require.define('', {
    'console-logger': function (exports, dna_require, module) {
        (function () {
            (function () {
                if (Function.prototype.bind && console && typeof console.log == 'object') {
                    [
                        'log',
                        'info',
                        'warn',
                        'error',
                        'assert',
                        'dir',
                        'clear',
                        'profile',
                        'profileEnd'
                    ].forEach(function (method) {
                        console[method] = this.bind(console[method], console);
                    }, Function.prototype.call);
                }
                if (Function.prototype.bind && console && typeof console.debug == 'object') {
                    ['debug'].forEach(function (method) {
                        console[method] = this.bind(console[method], console);
                    }, Function.prototype.call);
                }
                ;
                var DEBUG, ERROR, INFO, LOG_ENABLED, LOG_LEVELS, NOTICE, UNK_NS, WARN, console, e, get_namespaced_logger, log, nullog, partial, root, say, slice = [].slice;
                partial = dna_require('libprotein').partial;
                root = window;
                INFO = 'INFO';
                WARN = 'WARN';
                ERROR = 'ERROR';
                DEBUG = 'DEBUG';
                NOTICE = 'NOTICE';
                LOG_LEVELS = [
                    INFO,
                    WARN,
                    ERROR,
                    DEBUG,
                    NOTICE
                ];
                UNK_NS = 'UNK_NS';
                LOG_ENABLED = function () {
                    try {
                        return window.is_debug;
                    } catch (_error) {
                        e = _error;
                        return false;
                    }
                }();
                if (!root.console) {
                    root.console = {
                        log: function () {
                        },
                        info: function () {
                        },
                        warn: function () {
                        },
                        error: function () {
                        },
                        assert: function () {
                        },
                        dir: function () {
                        },
                        clear: function () {
                        },
                        profile: function () {
                        },
                        profileEnd: function () {
                        }
                    };
                }
                console = root.console;
                say = function () {
                    var log_level, log_ns, m, msgs;
                    log_level = arguments[0], log_ns = arguments[1], msgs = 3 <= arguments.length ? slice.call(arguments, 2) : [];
                    m = [
                        log_level ? '[' + log_level + ']' : '[NOTICE]',
                        log_ns ? '[' + log_ns + ']' : '[' + UNK_NS + ']'
                    ].concat(msgs);
                    switch (log_level) {
                    case ERROR:
                        return console != null ? typeof console.error === 'function' ? console.error.apply(console, m) : void 0 : void 0;
                    case INFO:
                        return console != null ? console.info.apply(console, m) : void 0;
                    case DEBUG:
                        if ((console != null ? console.debug : void 0) != null) {
                            return console != null ? console.debug(m.join(' ')) : void 0;
                        } else {
                            return console != null ? console.log.apply(console, m) : void 0;
                        }
                        break;
                    case WARN:
                        return console != null ? console.warn.apply(console, m) : void 0;
                    default:
                        return console != null ? console.log.apply(console, m) : void 0;
                    }
                };
                nullog = function () {
                };
                log = LOG_ENABLED ? say : nullog;
                get_namespaced_logger = function (log_ns) {
                    return {
                        info: partial(log, INFO, log_ns),
                        warn: partial(log, WARN, log_ns),
                        error: partial(log, ERROR, log_ns),
                        debug: partial(log, DEBUG, log_ns),
                        notice: partial(log, NOTICE, log_ns),
                        nullog: nullog
                    };
                };
                module.exports = {
                    info: partial(log, INFO, UNK_NS),
                    warn: partial(log, WARN, UNK_NS),
                    error: partial(log, ERROR, UNK_NS),
                    debug: partial(log, DEBUG, UNK_NS),
                    notice: partial(log, NOTICE, UNK_NS),
                    nullog: nullog,
                    ns: get_namespaced_logger,
                    protocols: {
                        definitions: {
                            ILogger: [
                                [
                                    'info',
                                    [],
                                    { varargs: true }
                                ],
                                [
                                    'warn',
                                    [],
                                    { varargs: true }
                                ],
                                [
                                    'error',
                                    [],
                                    { varargs: true }
                                ],
                                [
                                    'debug',
                                    [],
                                    { varargs: true }
                                ],
                                [
                                    'notice',
                                    [],
                                    { varargs: true }
                                ],
                                [
                                    'nullog',
                                    [],
                                    { varargs: true }
                                ]
                            ]
                        },
                        implementations: { ILogger: get_namespaced_logger }
                    }
                };
            }.call(this));
        }.call(this));
    }
});
dna_require.define('libstate', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var MY_STATE, get_state, lazy_init_my_state, swap_state, unwatch_state, watch_state, _AppState, __indexOf = [].indexOf || function (item) {
                        for (var i = 0, l = this.length; i < l; i++) {
                            if (i in this && this[i] === item)
                                return i;
                        }
                        return -1;
                    };
                _AppState = window.AppState;
                MY_STATE = '_state';
                lazy_init_my_state = function () {
                    var _base, _base1;
                    _AppState.modstate || (_AppState.modstate = {});
                    (_base = _AppState.modstate)[MY_STATE] || (_base[MY_STATE] = {});
                    return (_base1 = _AppState.modstate[MY_STATE]).watchers || (_base1.watchers = {});
                };
                get_state = function (key, __AppState) {
                    if (key && key !== MY_STATE) {
                        lazy_init_my_state();
                        return _AppState.modstate[key];
                    } else {
                        return void 0;
                    }
                };
                swap_state = function (key, mutator) {
                    var new_state, old_state, _ref;
                    if (key && key !== MY_STATE) {
                        lazy_init_my_state();
                        old_state = _AppState.modstate[key];
                        new_state = mutator(old_state);
                        _AppState.modstate[key] = new_state;
                        return (_ref = _AppState.modstate[MY_STATE].watchers[key]) != null ? _ref.map(function (h) {
                            return h(old_state, new_state);
                        }) : void 0;
                    }
                };
                watch_state = function (key, handler) {
                    var _base;
                    lazy_init_my_state();
                    (_base = _AppState.modstate[MY_STATE].watchers)[key] || (_base[key] = []);
                    if (__indexOf.call(_AppState.modstate[MY_STATE].watchers[key], handler) < 0) {
                        return _AppState.modstate[MY_STATE].watchers[key].push(handler);
                    }
                };
                unwatch_state = function (key, handler) {
                    var _base;
                    lazy_init_my_state();
                    (_base = _AppState.modstate[MY_STATE].watchers)[key] || (_base[key] = []);
                    if (__indexOf.call(_AppState.modstate[MY_STATE].watchers[key], handler) >= 0) {
                        return _AppState.modstate[MY_STATE].watchers[key] = _AppState.modstate[MY_STATE].watchers[key].filter(function (h) {
                            return h !== handler;
                        });
                    }
                };
                module.exports = {
                    get_state: get_state,
                    swap_state: swap_state,
                    watch_state: watch_state,
                    unwatch_state: unwatch_state
                };
            }.call(this));
        }.call(this));
    }
});
dna_require.define('libprotein', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var X, __slice = [].slice, __hasProp = {}.hasOwnProperty;
                X = {
                    partial: function () {
                        var f, partial_args, y;
                        f = arguments[0], partial_args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                        y = function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return f.apply(null, partial_args.concat(args));
                        };
                        return X.metabolize(f, y);
                    },
                    complement: function (f) {
                        return function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return !f.apply(null, args);
                        };
                    },
                    compose2: function (f, g) {
                        return function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return f(g.apply(null, args));
                        };
                    },
                    compose3: function (f, g, h) {
                        return function () {
                            var args;
                            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return f(g(h.apply(null, args)));
                        };
                    },
                    first: function (s) {
                        return s[0];
                    },
                    identity: function (x) {
                        return x;
                    },
                    drop_while: function (f, s) {
                        var i, _i, _len;
                        for (_i = 0, _len = s.length; _i < _len; _i++) {
                            i = s[_i];
                            if (!f(i)) {
                                return i;
                            }
                        }
                    },
                    is_function: function (v) {
                        return typeof v === 'function';
                    },
                    is_array: function (v) {
                        return Array.isArray(v);
                    },
                    is_object: function (v) {
                        if (X.is_array(v)) {
                            return false;
                        } else {
                            return v instanceof {}.constructor;
                        }
                    },
                    is_nan: function (v) {
                        return v !== v;
                    },
                    is_string: function (v) {
                        return typeof v === 'string';
                    },
                    bool: function (v) {
                        if (X.is_array(v)) {
                            return !!v.length;
                        } else if (X.is_object(v)) {
                            return !!Object.keys(v).length;
                        } else {
                            return !!v;
                        }
                    },
                    and_: function () {
                        var args;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        return args.reduce(function (a, b) {
                            return X.bool(a) && X.bool(b);
                        }, true);
                    },
                    or_: function () {
                        var args;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        return args.reduce(function (a, b) {
                            return X.bool(a) || X.bool(b);
                        }, false);
                    },
                    to_hash: function (list_of_tuples) {
                        var h;
                        h = {};
                        list_of_tuples.map(function (_arg) {
                            var k, v;
                            k = _arg[0], v = _arg[1];
                            return h[k] = v;
                        });
                        return h;
                    },
                    metabolize: function (f, g) {
                        g.meta = f.meta;
                        return g;
                    },
                    data_to_opts: function (sufx, node) {
                        var $node, keys;
                        $node = jQuery(node);
                        if ($node.data()) {
                            keys = Object.keys($node.data());
                            return X.to_hash(keys.filter(function (key) {
                                return key.slice(0, sufx.length) === sufx;
                            }).map(function (key) {
                                return [
                                    key.slice(sufx.length),
                                    $node.data(key)
                                ];
                            }));
                        } else {
                            return {};
                        }
                    },
                    add2: function (a, b) {
                        var k, ret, v;
                        if (X.is_array(a) && X.is_array(b)) {
                            return a.concat(b);
                        } else if (X.is_object(a) && X.is_object(b)) {
                            ret = {};
                            for (k in a) {
                                if (!__hasProp.call(a, k))
                                    continue;
                                v = a[k];
                                ret[k] = v;
                            }
                            for (k in b) {
                                if (!__hasProp.call(b, k))
                                    continue;
                                v = b[k];
                                ret[k] = v;
                            }
                            return ret;
                        } else {
                            return a + b;
                        }
                    },
                    add: function () {
                        var values;
                        values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        return values.reduce(function (a, b) {
                            return X.add2(a, b);
                        });
                    },
                    pubsubhub: function () {
                        return function () {
                            var q;
                            q = {};
                            return {
                                sub: function (name, f) {
                                    q[name] || (q[name] = []);
                                    return q[name].push(f);
                                },
                                pub: function () {
                                    var data, name, _ref;
                                    name = arguments[0], data = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                                    return (_ref = q[name]) != null ? _ref.map(function (f) {
                                        return f.apply(null, data);
                                    }) : void 0;
                                },
                                unsub: function (name, f) {
                                    if (q[name]) {
                                        return q[name] = q[name].filter(function (s) {
                                            return s !== f;
                                        });
                                    }
                                },
                                unsuball: function (name) {
                                    if (q[name]) {
                                        return q[name] = [];
                                    }
                                },
                                unsubcond: function (name, cond) {
                                    if (q[name]) {
                                        return q[name] = q[name].filter(cond);
                                    }
                                },
                                get: function (name) {
                                    return q[name];
                                }
                            };
                        }();
                    },
                    distinct: function (list) {
                        var i, k, t, v, _i, _len, _results;
                        t = {};
                        for (_i = 0, _len = list.length; _i < _len; _i++) {
                            i = list[_i];
                            t[i] = i;
                        }
                        _results = [];
                        for (k in t) {
                            v = t[k];
                            _results.push(v);
                        }
                        return _results;
                    },
                    repeat: function (v, n) {
                        var i, _i, _results;
                        _results = [];
                        for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
                            _results.push(v);
                        }
                        return _results;
                    },
                    make_lambda: function (expression) {
                        var expr;
                        if (expression === '' || expression === null) {
                            return X.identity;
                        } else if (expression.indexOf('=>') === -1) {
                            return new Function('_,__,___,____', 'return ' + expression);
                        } else {
                            expr = expression.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                            return new Function(expr[1], 'return ' + expr[2]);
                        }
                    },
                    urlencode: function (d) {
                        var k, v;
                        return function () {
                            var _results;
                            _results = [];
                            for (k in d) {
                                v = d[k];
                                _results.push('' + encodeURIComponent(k) + '=' + encodeURIComponent(v));
                            }
                            return _results;
                        }().join('&');
                    },
                    add_params_to_url: function (url, params) {
                        var has_params, start_char;
                        has_params = url.indexOf('?') > -1;
                        start_char = has_params ? '&' : '?';
                        return url + start_char + X.urlencode(params);
                    },
                    zip: function (one, two) {
                        var i, _i, _ref, _results;
                        _results = [];
                        for (i = _i = 0, _ref = Math.min(one.length, two.length); 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                            _results.push([
                                one[i],
                                two[i]
                            ]);
                        }
                        return _results;
                    }
                };
                module.exports = X;
            }.call(this));
        }.call(this));
    }
});
dna_require.define('libmonad', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var OK, aop_m, aop_t, cont_m, cont_t, debug, domonad, drop_while, error, error_m, error_t, first, identity, identity_m, info, is_error, is_function, is_null, lift_async, lift_sync, logger_m, logger_t, maybe_m, maybe_t, metabolize, partial, warn, _ref, _ref1, __slice = [].slice;
                _ref = dna_require('libprotein'), identity = _ref.identity, first = _ref.first, drop_while = _ref.drop_while, is_function = _ref.is_function, partial = _ref.partial, metabolize = _ref.metabolize;
                _ref1 = dna_require('console-logger'), info = _ref1.info, warn = _ref1.warn, error = _ref1.error, debug = _ref1.debug;
                is_null = function () {
                    var v;
                    v = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    if (v.length === 0) {
                        return null;
                    } else {
                        return v[0] === null;
                    }
                };
                domonad = function (_arg, functions, init_value) {
                    var bind, f0, result;
                    result = _arg.result, bind = _arg.bind;
                    f0 = bind(result(init_value), functions[0]);
                    return [f0].concat(functions.slice(1)).reduce(function (a, b) {
                        return bind(a, b);
                    });
                };
                identity_m = function () {
                    return {
                        result: identity,
                        bind: function (mv, f) {
                            return f(mv);
                        }
                    };
                };
                OK = void 0;
                is_error = function (_arg) {
                    var err, val;
                    err = _arg[0], val = _arg[1];
                    return err !== OK;
                };
                error_m = function () {
                    return {
                        result: function (v) {
                            return [
                                OK,
                                v
                            ];
                        },
                        bind: function (mv, f) {
                            if (is_error(mv)) {
                                return mv;
                            } else {
                                return f(mv[1]);
                            }
                        }
                    };
                };
                error_t = function (inner) {
                    return {
                        result: function (v) {
                            return [
                                OK,
                                inner.result(v)
                            ];
                        },
                        bind: function (mv, f) {
                            if (is_error(mv)) {
                                return mv;
                            } else {
                                return inner.bind(mv[1], f);
                            }
                        }
                    };
                };
                maybe_m = function (_arg) {
                    var is_error;
                    is_error = _arg.is_error;
                    return {
                        zero: function () {
                            return is_error();
                        },
                        result: function (v) {
                            return v;
                        },
                        bind: function (mv, f) {
                            if (is_error(mv)) {
                                return mv;
                            } else {
                                return f(mv);
                            }
                        },
                        plus: function () {
                            var mvs;
                            mvs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            return first(drop_while(is_error(mvs)));
                        }
                    };
                };
                maybe_t = function (inner, _arg) {
                    var is_error;
                    is_error = _arg.is_error;
                    return {
                        result: function (v) {
                            return inner.result(v);
                        },
                        bind: function (mv, f) {
                            if (is_error(mv)) {
                                return mv;
                            } else {
                                return inner.bind(mv, f);
                            }
                        }
                    };
                };
                aop_m = function () {
                    return {
                        result: function (v) {
                            return v;
                        },
                        bind: function (mv, f) {
                            var _ref2, _ref3;
                            if ((_ref2 = f.meta) != null ? (_ref3 = _ref2.concerns) != null ? _ref3.after : void 0 : void 0) {
                                f.meta.concerns.after.map(function (_arg) {
                                    var check, handle;
                                    check = _arg[0], handle = _arg[1];
                                    debug('<aop_m>', 'concern found for ' + f.meta.protocol + '/' + f.meta.name, mv);
                                    if (check(mv)) {
                                        return handle(mv);
                                    }
                                });
                            }
                            return f(mv);
                        }
                    };
                };
                aop_t = function (inner) {
                    return {
                        result: function (v) {
                            return inner.result(v);
                        },
                        bind: function (mv, f) {
                            var _ref2, _ref3;
                            if ((_ref2 = f.meta) != null ? (_ref3 = _ref2.concerns) != null ? _ref3.after : void 0 : void 0) {
                                return f.meta.concerns.after.map(function (_arg) {
                                    var check, handle;
                                    check = _arg[0], handle = _arg[1];
                                    debug('<aop_t>', 'concern found for ' + f.meta.protocol + '/' + f.meta.name, mv);
                                    if (check(mv)) {
                                        return handle(inner.bind(mv, f));
                                    }
                                });
                            } else {
                                return inner.bind(mv, f);
                            }
                        }
                    };
                };
                logger_m = function (log_fn) {
                    var log;
                    log = partial(log_fn, '<logger_m>');
                    return {
                        result: function (v) {
                            log('Got value:', { v: v });
                            return v;
                        },
                        bind: function (mv, f) {
                            var r, _ref2, _ref3;
                            log('Going to call f(mv):', '' + (((_ref2 = f.meta) != null ? _ref2.protocol : void 0) || '-') + '/' + (((_ref3 = f.meta) != null ? _ref3.name : void 0) || f), { mv: mv });
                            r = f(mv);
                            return log('Got result:', { r: r });
                        }
                    };
                };
                logger_t = function (inner, log_fn) {
                    var log;
                    log = partial(log_fn, '<logger_t>');
                    return {
                        result: function (v) {
                            var r;
                            log('Got value:', { v: v });
                            r = inner.result(v);
                            log('Got inner monad\'s result value:', { r: r });
                            return r;
                        },
                        bind: function (mv, f) {
                            var r, _ref2, _ref3;
                            log('Going to call f(mv):', '' + (((_ref2 = f.meta) != null ? _ref2.protocol : void 0) || '-') + '/' + (((_ref3 = f.meta) != null ? _ref3.name : void 0) || f), { mv: mv });
                            r = inner.bind(mv, f);
                            log('Got result:', { r: r });
                            return r;
                        }
                    };
                };
                cont_m = function () {
                    return {
                        result: function (v) {
                            return function (c) {
                                return c(v);
                            };
                        },
                        bind: function (mv, f) {
                            return function (c) {
                                return mv(function (v) {
                                    return f(v)(c);
                                });
                            };
                        }
                    };
                };
                cont_t = function (inner) {
                    return {
                        result: function (v) {
                            return function (c) {
                                return c(inner.result(v));
                            };
                        },
                        bind: function (mv, f) {
                            return function (c) {
                                var get_h;
                                get_h = function (v) {
                                    var inner_bind_res;
                                    inner_bind_res = inner.bind(v, f);
                                    if (is_function(inner_bind_res)) {
                                        return inner_bind_res;
                                    } else {
                                        return function (c) {
                                            return c(inner_bind_res);
                                        };
                                    }
                                };
                                return mv(function (v) {
                                    return get_h(v)(c);
                                });
                            };
                        }
                    };
                };
                lift_sync = function (arity, f) {
                    ' Lifts a function:\nf: arg1 -> ... -> argN\nto a function:\nf1: (arg1 -> ... -> argN) -> cont';
                    var g;
                    g = function () {
                        var args, h;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        h = function (c) {
                            var res;
                            res = f.apply(null, args.slice(0, arity));
                            return c(res);
                        };
                        return metabolize(f, h);
                    };
                    return metabolize(f, g);
                };
                lift_async = function (arity, f) {
                    ' Lifts a function:\nf: arg1 -> ... -> argN -> cb\nto a function:\nf1: (arg1 -> ... argN) -> cont';
                    var g;
                    g = function () {
                        var args, h;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        h = function (c) {
                            return f.apply(null, args.slice(0, arity - 1).concat([c]));
                        };
                        return metabolize(f, h);
                    };
                    return metabolize(f, g);
                };
                module.exports = {
                    domonad: domonad,
                    identity_m: identity_m,
                    maybe_m: maybe_m,
                    maybe_t: maybe_t,
                    aop_m: aop_m,
                    aop_t: aop_t,
                    error_m: error_m,
                    error_t: error_t,
                    cont_m: cont_m,
                    cont_t: cont_t,
                    logger_m: logger_m,
                    logger_t: logger_t,
                    lift_sync: lift_sync,
                    lift_async: lift_async,
                    is_null: is_null
                };
            }.call(this));
        }.call(this));
    }
});
dna_require.define('libprotocol', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var CONS, PROTO, PROTOCOL_CACHE, THIS, debug, discover_protocols, dispatch_impl, dump_impls, error, get_arity, get_meta, get_meta_key, get_method, get_protocol, info, is_array, is_async, is_vararg, partial, register_exports, register_protocol, register_protocol_impl, uncache_protocol, unique, warn, _ref, _ref1, __slice = [].slice, __hasProp = {}.hasOwnProperty;
                _ref = dna_require('console-logger').ns('libprotocol'), info = _ref.info, warn = _ref.warn, error = _ref.error, debug = _ref.debug;
                PROTO = {
                    Implementations: {},
                    Protocols: {}
                };
                THIS = 'this';
                CONS = '*cons*';
                PROTOCOL_CACHE = window._libprotocol_cache;
                _ref1 = dna_require('libprotein'), partial = _ref1.partial, is_array = _ref1.is_array;
                get_protocol = function (p) {
                    uncache_protocol(p);
                    if (PROTO.Protocols.hasOwnProperty(p)) {
                        return PROTO.Protocols[p];
                    } else {
                        throw 'No such registered protocol: \'' + p + '\'';
                    }
                };
                register_protocol = function (name, p) {
                    if (!PROTO.Protocols.hasOwnProperty(p)) {
                        return PROTO.Protocols[name] = p;
                    } else {
                        throw 'Protocol already registered: \'' + name + '\'';
                    }
                };
                get_method = function (ns, method_name) {
                    var m, _ref2;
                    m = (_ref2 = PROTO.Protocols[ns]) != null ? _ref2.filter(function (_arg) {
                        var mn;
                        mn = _arg[0];
                        return mn === method_name;
                    }) : void 0;
                    if (m.length === 1) {
                        return m[0];
                    } else {
                        error('No such method:', ns, method_name);
                        throw 'No such method';
                    }
                };
                get_meta = function (ns, method_name) {
                    var meta, _, _ref2;
                    _ref2 = get_method(ns, method_name), _ = _ref2[0], _ = _ref2[1], meta = _ref2[2];
                    return meta || {};
                };
                get_meta_key = function (prop, ns, method_name) {
                    return get_meta(ns, method_name)[prop];
                };
                is_async = partial(get_meta_key, 'async');
                is_vararg = partial(get_meta_key, 'vararg');
                get_arity = function (ns, method_name) {
                    var argums, _, _ref2;
                    _ref2 = get_method(ns, method_name), _ = _ref2[0], argums = _ref2[1], _ = 3 <= _ref2.length ? __slice.call(_ref2, 2) : [];
                    return argums.length;
                };
                register_protocol_impl = function (protocol, impl) {
                    return PROTO.Implementations[protocol] = impl;
                };
                register_exports = function (exports) {
                    var definition, impl, protocol, _ref2, _ref3, _ref4, _ref5, _results;
                    if ((_ref2 = exports.protocols) != null ? _ref2.definitions : void 0) {
                        _ref3 = exports.protocols.definitions;
                        for (protocol in _ref3) {
                            definition = _ref3[protocol];
                            register_protocol(protocol, definition);
                        }
                    }
                    if ((_ref4 = exports.protocols) != null ? _ref4.implementations : void 0) {
                        _ref5 = exports.protocols.implementations;
                        _results = [];
                        for (protocol in _ref5) {
                            impl = _ref5[protocol];
                            _results.push(register_protocol_impl(protocol, impl));
                        }
                        return _results;
                    }
                };
                discover_protocols = function () {
                    var e, modname, modules, _results;
                    if (PROTOCOL_CACHE) {
                        return info('Protocol cache available, skipping discovery');
                    } else {
                        modules = function () {
                            try {
                                return dna_require.modules();
                            } catch (_error) {
                                e = _error;
                                return window.bootstrapper.modules;
                            }
                        }();
                        _results = [];
                        for (modname in modules) {
                            _results.push(register_exports(dna_require(modname)));
                        }
                        return _results;
                    }
                };
                unique = function (arr) {
                    var a, i, k, _i, _len, _results;
                    a = {};
                    for (_i = 0, _len = arr.length; _i < _len; _i++) {
                        i = arr[_i];
                        a[i] = true;
                    }
                    _results = [];
                    for (k in a) {
                        if (!__hasProp.call(a, k))
                            continue;
                        _results.push(k);
                    }
                    return _results;
                };
                uncache_protocol = function (protocol) {
                    var cache, mods, _i, _len;
                    if (PROTOCOL_CACHE) {
                        if (!(PROTO.Protocols[protocol] && PROTO.Implementations[protocol])) {
                            mods = [];
                            for (_i = 0, _len = PROTOCOL_CACHE.length; _i < _len; _i++) {
                                cache = PROTOCOL_CACHE[_i];
                                if (cache[protocol] !== void 0) {
                                    mods = mods.concat(cache[protocol]);
                                }
                            }
                            mods = unique(mods);
                            return mods.map(function (modname) {
                                if (typeof modname === 'string') {
                                    return register_exports(dna_require(modname));
                                } else {
                                    // an instance
                                    // `modname` must be an object
                                    //
                                    // {protocols: { definitions: ...
                                    //             , implementations: ...}}
                                    return register_exports(modname);
                                }
                            });
                        }
                    }
                };
                dispatch_impl = function (protocol, opts) {
                    var concerns, cons, f, fun, k, meta, name, q, v, xopts, _i, _len, _ref2, _ref3, _ref4;
                    if (opts == null) {
                        opts = void 0;
                    }
                    if (!(PROTO.Protocols[protocol] && PROTO.Implementations[protocol])) {
                        uncache_protocol(protocol);
                        discover_protocols();
                    }
                    if (PROTO.Protocols[protocol] && PROTO.Implementations[protocol]) {
                        cons = PROTO.Protocols[protocol].filter(function (m) {
                            return m[0] === CONS;
                        })[0];
                        if (cons) {
                            meta = get_meta(protocol, CONS);
                            if ((_ref2 = meta.concerns) != null ? _ref2.before : void 0) {
                                concerns = is_array(meta.concerns.before) ? meta.concerns.before : [meta.concerns.before];
                                xopts = [opts];
                                for (_i = 0, _len = concerns.length; _i < _len; _i++) {
                                    f = concerns[_i];
                                    xopts.push(f.apply(null, xopts));
                                }
                                opts = xopts;
                            }
                        }
                        q = (_ref3 = PROTO.Implementations)[protocol].apply(_ref3, is_array(opts) ? opts : [opts]);
                        for (name in q) {
                            if (!__hasProp.call(q, name))
                                continue;
                            fun = q[name];
                            fun.meta || (fun.meta = {});
                            fun.meta.name = name;
                            fun.meta.protocol = protocol;
                            fun.meta.arity = get_arity(protocol, name);
                            _ref4 = get_meta(protocol, name);
                            for (k in _ref4) {
                                v = _ref4[k];
                                fun.meta[k] = v;
                            }
                        }
                        return q;
                    } else {
                        debug('Cant find implementations for protocol ' + protocol);
                        return null;
                    }
                };
                dump_impls = function () {
                    return debug('Currently registered PROTO.Implementations:', PROTO.Implementations);
                };
                module.exports = {
                    register_protocol_impl: register_protocol_impl,
                    register_protocol: register_protocol,
                    get_protocol: get_protocol,
                    dispatch_impl: dispatch_impl,
                    dump_impls: dump_impls,
                    is_async: is_async,
                    is_vararg: is_vararg,
                    get_arity: get_arity,
                    discover_protocols: discover_protocols
                };
            }.call(this));
        }.call(this));
    }
});
dna_require.define('dc-helper', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var STOP, debug, dispatch_impl, error, info, is_nan, make_lambda, named_waits, stack, warn, _ref, _ref1, __indexOf = [].indexOf || function (item) {
                        for (var i = 0, l = this.length; i < l; i++) {
                            if (i in this && this[i] === item)
                                return i;
                        }
                        return -1;
                    }, __slice = [].slice;
                _ref = dna_require('libprotein'), make_lambda = _ref.make_lambda, is_nan = _ref.is_nan;
                dispatch_impl = dna_require('libprotocol').dispatch_impl;
                _ref1 = dispatch_impl('ILogger', 'IHelper'), info = _ref1.info, warn = _ref1.warn, error = _ref1.error, debug = _ref1.debug;
                named_waits = {};
                STOP = null;
                stack = [];
                module.exports = {
                    protocols: {
                        definitions: {
                            IHelper: [
                                [
                                    'len',
                                    ['array']
                                ],
                                [
                                    'add',
                                    ['vector']
                                ],
                                [
                                    'drop',
                                    [
                                        'items_vec',
                                        'cur_item'
                                    ]
                                ],
                                [
                                    'swap',
                                    [
                                        'items_vec',
                                        'cur_item'
                                    ]
                                ],
                                [
                                    'inc',
                                    ['val']
                                ],
                                [
                                    'dec',
                                    ['val']
                                ],
                                [
                                    'parseint',
                                    ['val']
                                ],
                                [
                                    'proxyinfo',
                                    ['a']
                                ],
                                [
                                    '->->->',
                                    ['a']
                                ],
                                [
                                    'say',
                                    [
                                        'msgs',
                                        'more'
                                    ],
                                    { vargs: true }
                                ],
                                [
                                    'info',
                                    [
                                        'msgs',
                                        'more'
                                    ],
                                    { vargs: true }
                                ],
                                [
                                    'warn',
                                    [
                                        'msgs',
                                        'more'
                                    ],
                                    { vargs: true }
                                ],
                                [
                                    'error',
                                    [
                                        'msgs',
                                        'more'
                                    ],
                                    { vargs: true }
                                ],
                                [
                                    'debug',
                                    [
                                        'msgs',
                                        'more'
                                    ],
                                    { vargs: true }
                                ],
                                [
                                    'not',
                                    ['a']
                                ],
                                [
                                    'stop!',
                                    []
                                ],
                                [
                                    'stop?',
                                    [
                                        'patrn',
                                        'val'
                                    ]
                                ],
                                [
                                    'pass',
                                    [
                                        'pattern',
                                        'value'
                                    ]
                                ],
                                [
                                    'wait',
                                    ['timeout'],
                                    { async: true }
                                ],
                                [
                                    'named-wait',
                                    [
                                        'timeout',
                                        'name'
                                    ],
                                    { async: true }
                                ],
                                [
                                    'cancel-wait',
                                    ['name']
                                ],
                                [
                                    'preventOnEnter',
                                    ['event']
                                ],
                                [
                                    'random',
                                    []
                                ],
                                [
                                    'push-to-google',
                                    ['vec']
                                ],
                                [
                                    '###',
                                    [
                                        'blk',
                                        'args'
                                    ]
                                ],
                                [
                                    'wrap',
                                    [
                                        'tpl',
                                        'pattern',
                                        'value'
                                    ]
                                ],
                                [
                                    'true',
                                    []
                                ],
                                [
                                    'false',
                                    []
                                ],
                                [
                                    'the-undefined',
                                    []
                                ],
                                [
                                    'match',
                                    [
                                        'predicate',
                                        'val'
                                    ]
                                ],
                                [
                                    'slice',
                                    [
                                        '[start,count]',
                                        'str'
                                    ]
                                ],
                                [
                                    'push',
                                    ['i']
                                ],
                                [
                                    'pop',
                                    []
                                ],
                                [
                                    'make-obj',
                                    ['keyvals']
                                ],
                                [
                                    'obj->json',
                                    ['obj']
                                ],
                                [
                                    'location_replace',
                                    ['url']
                                ],
                                [
                                    'getattr',
                                    [
                                        'key',
                                        'obj'
                                    ]
                                ],
                                [
                                    'or?',
                                    [
                                        'v1',
                                        'v2'
                                    ]
                                ]
                            ]
                        },
                        implementations: {
                            IHelper: function (node) {
                                return {
                                    'slice': function (_arg, str) {
                                        var count, start;
                                        start = _arg[0], count = _arg[1];
                                        return str.substr(start, count);
                                    },
                                    'push': function (i) {
                                        return stack.push(i);
                                    },
                                    'pop': function () {
                                        return stack.pop();
                                    },
                                    'match': function (predicate, value) {
                                        var real_predicate;
                                        real_predicate = make_lambda(predicate);
                                        if (real_predicate(value)) {
                                            return value;
                                        } else {
                                            return STOP;
                                        }
                                    },
                                    'true': function () {
                                        return true;
                                    },
                                    'false': function () {
                                        return false;
                                    },
                                    'the-undefined': function () {
                                        return void 0;
                                    },
                                    wrap: function (t, p, v) {
                                        return t.replace(p, v);
                                    },
                                    '###': function (block, args) {
                                        return args;
                                    },
                                    'push-to-google': function (p) {
                                        debug('push-to-google', p);
                                        return push_to_google.apply(null, p);
                                    },
                                    random: function () {
                                        return Math.random();
                                    },
                                    len: function (array) {
                                        return array.length || 0;
                                    },
                                    wait: function (timeout, cont) {
                                        debug('waiting ' + timeout + 'ms');
                                        return setTimeout(function () {
                                            debug('waiting done');
                                            return cont();
                                        }, timeout);
                                    },
                                    'named-wait': function (timeout, name, _, cont) {
                                        debug('named-wait', timeout, name);
                                        return named_waits[name] = setTimeout(function () {
                                            debug(debug('named-wait done', timeout, name));
                                            return cont();
                                        }, timeout);
                                    },
                                    'cancel-wait': function (name) {
                                        if (named_waits[name]) {
                                            debug('cancelling named timeout', name);
                                            return clearTimeout(named_waits[name]);
                                        }
                                    },
                                    not: function (a) {
                                        return !a;
                                    },
                                    'stop!': function () {
                                        return STOP;
                                    },
                                    'stop?': function (p, v) {
                                        if (p === v) {
                                            return STOP;
                                        } else {
                                            return v;
                                        }
                                    },
                                    'or?': function (v1, v2) {
                                        if (v1 || v2) {
                                            return true;
                                        } else {
                                            return STOP;
                                        }
                                    },
                                    'pass': function (pattern, value) {
                                        if (pattern === value) {
                                            return value;
                                        } else {
                                            return STOP;
                                        }
                                    },
                                    add: function (vec) {
                                        return vec.reduce(function (a, b) {
                                            return parseInt(a, 10) + parseInt(b, 10);
                                        });
                                    },
                                    drop: function (items, item) {
                                        var item_is_in_items;
                                        item_is_in_items = is_nan(item) ? !!items.filter(function (i) {
                                            return is_nan(i);
                                        }).length : __indexOf.call(items, item) >= 0;
                                        if (item_is_in_items) {
                                            return STOP;
                                        } else {
                                            return item;
                                        }
                                    },
                                    swap: function (_arg, item) {
                                        var from, to;
                                        from = _arg[0], to = _arg[1];
                                        if (is_nan(item) && is_nan(from) || item === from) {
                                            return to;
                                        } else {
                                            return item;
                                        }
                                    },
                                    '->->->': function (a) {
                                        debug('[->->->]', a);
                                        return a;
                                    },
                                    proxyinfo: function (a) {
                                        console.log('%c[proxy:@' + node.id + '] ', 'background: #222; color: #bada55', 'incoming: ' + a + ', type: ' + typeof a);
                                        return a;
                                    },
                                    info: info,
                                    error: error,
                                    warn: warn,
                                    debug: function () {
                                        var a;
                                        a = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                                        return debug.apply(null, a);
                                    },
                                    say: info,
                                    inc: function (v) {
                                        return parseInt(v, 10) + 1;
                                    },
                                    dec: function (v) {
                                        return parseInt(v, 10) - 1;
                                    },
                                    parseint: function (v) {
                                        return parseInt(v);
                                    },
                                    preventOnEnter: function (e) {
                                        if (e.keyCode === 13) {
                                            e.preventDefault();
                                        }
                                        return e;
                                    },
                                    'make-obj': function (keyvals) {
                                        var key, obj, val, _i, _len, _ref2;
                                        obj = {};
                                        for (_i = 0, _len = keyvals.length; _i < _len; _i++) {
                                            _ref2 = keyvals[_i], key = _ref2[0], val = _ref2[1];
                                            obj[key] = val;
                                        }
                                        return obj;
                                    },
                                    'obj->json': function (obj) {
                                        return JSON.stringify(obj);
                                    },
                                    location_replace: function (url) {
                                        return window.location.replace(url);
                                    },
                                    getattr: function (key, obj) {
                                        return obj[key];
                                    }
                                };
                            }
                        }
                    }
                };
            }.call(this));
        }.call(this));
    }
});
dna_require.define('dna-lang', {
    'utils/Math.uuid': function (exports, dna_require, module) {
        (function () {
            (function () {
                var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
                Math.uuid = function (len, radix) {
                    var chars = CHARS, uuid = [], i;
                    radix = radix || chars.length;
                    if (len) {
                        for (i = 0; i < len; i++)
                            uuid[i] = chars[0 | Math.random() * radix];
                    } else {
                        var r;
                        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                        uuid[14] = '4';
                        for (i = 0; i < 36; i++) {
                            if (!uuid[i]) {
                                r = 0 | Math.random() * 16;
                                uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
                            }
                        }
                    }
                    return uuid.join('');
                };
                Math.uuidFast = function () {
                    var chars = CHARS, uuid = new Array(36), rnd = 0, r;
                    for (var i = 0; i < 36; i++) {
                        if (i == 8 || i == 13 || i == 18 || i == 23) {
                            uuid[i] = '-';
                        } else if (i == 14) {
                            uuid[i] = '4';
                        } else {
                            if (rnd <= 2)
                                rnd = 33554432 + Math.random() * 16777216 | 0;
                            r = rnd & 15;
                            rnd = rnd >> 4;
                            uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
                        }
                    }
                    return uuid.join('');
                };
                Math.uuidCompact = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
                        return v.toString(16);
                    });
                };
            }());
            module.exports = Math;
        }.call(this));
    },
    'index': function (exports, dna_require, module) {
        (function () {
            module.exports = dna_require('lib-js/dna');
        }.call(this));
    },
    'lib-js/dna': function (exports, dna_require, module) {
        (function () {
            (function () {
                var BQ, BUILTIN, DNA_DATATYPES, DNA_EXTEND, DNA_ID_PREFIX, DNA_PRIMITIVES, DNA_SUBSCRIBE, FLOAT, FUNCTION, HASHMAP, INTEGER, KEYWORD, MY_STATE, Math, NAN, NESTED_EXPR, NULL, PARTIAL_FN, QUOTED_NESTED_EXPR, RE, STRING, THIS, VECTOR, X, bind_handlers_to_event, bool, complement, compose3, cont_m, cont_t, create_cell, create_cell_by_id, debug, default_handlers_cont, dispatch_handler, dispatch_impl, distinct, domonad, error, find_cell, fun_with_meta, get_arity, get_cell, get_method_ns, get_primitive_value_handler, get_protocol, get_state, get_value_handler, info, is_array, is_async, is_function, is_just_function, is_nested_expr, is_null, is_object, is_partial_function, is_value, lazy_init_state, lift, lift_async, lift_sync, logger_m, logger_t, make_dynamic_handler, make_lambda, make_monadized_handler, make_nested_expr, maybe_m, maybe_t, nullog, observe_dom_added, parse_genome, partial, process_ast_handler_node, process_ast_vector, process_meta, process_subscribe, register_protocol_impl, repeat, save_cell, swap_state, synthesize_cell, synthesize_node, warn, watch_my_state, watch_state, _ref, _ref1, _ref2, _ref3, _ref4, __slice = [].slice, __indexOf = [].indexOf || function (item) {
                        for (var i = 0, l = this.length; i < l; i++) {
                            if (i in this && this[i] === item)
                                return i;
                        }
                        return -1;
                    };
                DNA_EXTEND = 'extend';
                DNA_SUBSCRIBE = 'subscribe';
                DNA_ID_PREFIX = 'Z';
                NAN = 'NaN';
                NULL = 'null';
                KEYWORD = 'keyword';
                STRING = 'string';
                INTEGER = 'integer';
                FLOAT = 'float';
                VECTOR = 'vector';
                HASHMAP = 'hashmap';
                BQ = 'bq';
                RE = 're';
                FUNCTION = 'fn';
                PARTIAL_FN = 'partial';
                NESTED_EXPR = 'nested';
                QUOTED_NESTED_EXPR = 'quoted-nested';
                DNA_PRIMITIVES = [
                    NAN,
                    NULL,
                    KEYWORD,
                    STRING,
                    INTEGER,
                    FLOAT,
                    RE,
                    BQ
                ];
                DNA_DATATYPES = [
                    NAN,
                    NULL,
                    KEYWORD,
                    STRING,
                    INTEGER,
                    FLOAT,
                    VECTOR,
                    HASHMAP,
                    RE,
                    BQ
                ];
                THIS = 'this';
                BUILTIN = '*builtin*';
                Math = dna_require('../utils/Math.uuid');
                _ref = dna_require('libprotein'), partial = _ref.partial, is_array = _ref.is_array, is_object = _ref.is_object, bool = _ref.bool, make_lambda = _ref.make_lambda, complement = _ref.complement, compose3 = _ref.compose3, distinct = _ref.distinct, repeat = _ref.repeat;
                observe_dom_added = dna_require('dom-mutation-observer').observe_dom_added;
                parse_genome = dna_require('genome-parser').parse;
                _ref1 = dna_require('libprotocol'), register_protocol_impl = _ref1.register_protocol_impl, dispatch_impl = _ref1.dispatch_impl, get_protocol = _ref1.get_protocol, is_async = _ref1.is_async, get_arity = _ref1.get_arity;
                _ref2 = dna_require('libmonad'), cont_t = _ref2.cont_t, cont_m = _ref2.cont_m, maybe_t = _ref2.maybe_t, maybe_m = _ref2.maybe_m, logger_t = _ref2.logger_t, logger_m = _ref2.logger_m, domonad = _ref2.domonad, is_null = _ref2.is_null, lift_sync = _ref2.lift_sync, lift_async = _ref2.lift_async;
                _ref3 = dispatch_impl('ILogger', 'DNA'), info = _ref3.info, warn = _ref3.warn, error = _ref3.error, debug = _ref3.debug, nullog = _ref3.nullog;
                _ref4 = dna_require('libstate'), get_state = _ref4.get_state, swap_state = _ref4.swap_state, watch_state = _ref4.watch_state;
                MY_STATE = 'dna';
                watch_my_state = function (old_state, new_state) {
                };
                lazy_init_state = function (state) {
                    state || (state = {});
                    state.CELLS || (state.CELLS = {});
                    watch_state(MY_STATE, watch_my_state);
                    return state;
                };
                process_ast_vector = function (vector, cell, ctx, cont) {
                    var count, local_cont, res;
                    res = [];
                    if (vector.length === 0) {
                        return cont(res);
                    } else {
                        count = vector.length;
                        local_cont = function (idx) {
                            return function (r) {
                                res[idx] = r;
                                count--;
                                if (count === 0) {
                                    return cont(res);
                                }
                            };
                        };
                        return vector.map(function (ast_node, idx) {
                            var c, h;
                            h = process_ast_handler_node(cell, ctx, ast_node);
                            c = local_cont(idx);
                            if (h.meta.async) {
                                return h.apply(null, repeat(void 0, h.meta.arity - 1).concat([c]));
                            } else {
                                return c(h.apply(null, repeat(void 0, h.meta.arity)));
                            }
                        });
                    }
                };
                default_handlers_cont = function () {
                    var args;
                    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                };
                is_value = function (type) {
                    return __indexOf.call(DNA_DATATYPES, type) >= 0;
                };
                is_function = function (type) {
                    return type === FUNCTION || type === PARTIAL_FN;
                };
                is_just_function = function (type) {
                    return type === FUNCTION;
                };
                is_partial_function = function (type) {
                    return type === PARTIAL_FN;
                };
                is_nested_expr = function (type) {
                    return type === NESTED_EXPR;
                };
                lift = function (h) {
                    if (h.meta.async) {
                        return lift_async(h.meta.arity, h);
                    } else {
                        return lift_sync(h.meta.arity, h);
                    }
                };
                get_method_ns = function (name, cell) {
                    var method_invariants;
                    method_invariants = cell.receptors[name];
                    if ((method_invariants != null ? method_invariants.length : void 0) > 0) {
                        return method_invariants[0].ns;
                    } else {
                        error('No such method: ' + name + ' in the cell:', cell);
                        throw 'Method missing in cell';
                    }
                };
                dispatch_handler = function (ns, name, cell) {
                    var method_from_given_ns, method_invariants;
                    method_invariants = cell.receptors[name];
                    if (method_invariants) {
                        if (ns) {
                            method_from_given_ns = method_invariants.filter(function (m) {
                                return m.ns === ns;
                            })[0];
                            if (method_from_given_ns) {
                                return method_from_given_ns.impl;
                            } else {
                                error('Method not found: ' + ns + '/' + name + ' in cell', cell);
                                throw 'Method not found: ' + ns + '/' + name + ' in cell id=`' + cell.id + '`';
                            }
                        } else {
                            if (method_invariants.length === 1) {
                                return method_invariants[0].impl;
                            } else {
                                error('More then one method with name `' + name + '` found in cell and namespace not set', cell);
                                throw 'More then one method with name `' + name + '` found in cell id=`' + cell.id + '` and namespace not set';
                            }
                        }
                    } else {
                        error('Method with name `' + name + '` not found in cell', {
                            ns: ns,
                            name: name,
                            cell: cell
                        });
                        throw 'Method with name `' + name + '` not found in cell id=`' + cell.id + '`';
                    }
                };
                save_cell = function (cell) {
                    return swap_state(MY_STATE, function (old_state) {
                        var new_state;
                        new_state = lazy_init_state(old_state);
                        new_state.CELLS[cell.id] = cell;
                        return new_state;
                    });
                };
                get_cell = function (id) {
                    return lazy_init_state(get_state(MY_STATE)).CELLS[id];
                };
                find_cell = function (scope_id, this_cell, ctx) {
                    var cell;
                    if ((scope_id === THIS || !scope_id) && this_cell) {
                        return this_cell;
                    } else if (cell = get_cell(scope_id)) {
                        return cell;
                    } else if (cell = create_cell_by_id(scope_id, ctx, this_cell.synthesis_id)) {
                        return cell;
                    } else {
                        return null;
                    }
                };
                create_cell_by_id = function (id, ctx, synthesis_id) {
                    var node;
                    if (node = ctx.dom_parser.get_by_id(id)) {
                        return create_cell(ctx, synthesis_id, node);
                    } else {
                        return null;
                    }
                };
                fun_with_meta = function (fn, meta) {
                    fn.meta = meta;
                    return fn;
                };
                get_primitive_value_handler = function (type, value) {
                    switch (type) {
                    case NAN:
                        return fun_with_meta(function () {
                            return NaN;
                        }, {
                            arity: 0,
                            async: false,
                            protocol: BUILTIN,
                            name: 'NaN'
                        });
                    case NULL:
                        return fun_with_meta(function () {
                            return null;
                        }, {
                            arity: 0,
                            async: false,
                            protocol: BUILTIN,
                            name: 'null'
                        });
                    case KEYWORD:
                        return fun_with_meta(function () {
                            return value;
                        }, {
                            arity: 0,
                            async: false,
                            protocol: BUILTIN,
                            name: ':Keyword ' + value
                        });
                    case STRING:
                        return fun_with_meta(function () {
                            return value;
                        }, {
                            arity: 0,
                            async: false,
                            ns: BUILTIN,
                            name: 'String \'' + value + '\''
                        });
                    case INTEGER:
                        return fun_with_meta(function () {
                            return value;
                        }, {
                            arity: 0,
                            async: false,
                            ns: BUILTIN,
                            name: 'Integer \'' + value + '\''
                        });
                    case FLOAT:
                        return fun_with_meta(function () {
                            return value;
                        }, {
                            arity: 0,
                            async: false,
                            ns: BUILTIN,
                            name: 'Float \'' + value + '\''
                        });
                    case BQ:
                        return fun_with_meta(function () {
                            return make_lambda(value);
                        }, {
                            arity: 0,
                            async: false,
                            ns: BUILTIN,
                            name: '`Lambda \'' + value + '\''
                        });
                    case RE:
                        return fun_with_meta(function () {
                            return function (a) {
                                return value.test(a);
                            };
                        }, {
                            arity: 0,
                            async: false,
                            ns: BUILTIN,
                            name: '/Regexp/ \'' + value + '\''
                        });
                    default:
                        throw 'Unknown primitive type: ' + type + '/' + value;
                    }
                };
                get_value_handler = function (type, value, cell, ctx) {
                    switch (type) {
                    case NAN:
                    case NULL:
                    case KEYWORD:
                    case STRING:
                    case INTEGER:
                    case FLOAT:
                    case BQ:
                    case RE:
                        return get_primitive_value_handler(type, value);
                    case VECTOR:
                        return fun_with_meta(function (cont) {
                            return process_ast_vector(value, cell, ctx, function (res) {
                                return cont(res);
                            });
                        }, {
                            async: true,
                            arity: 1,
                            protocol: BUILTIN,
                            name: 'Vector'
                        });
                    case HASHMAP:
                        return fun_with_meta(function (key) {
                            if (key) {
                                return value[key];
                            } else {
                                return value;
                            }
                        }, {
                            arity: 1,
                            async: false,
                            protocol: BUILTIN,
                            name: 'Hashmap'
                        });
                    default:
                        throw 'Unknown type: ' + type;
                    }
                };
                make_nested_expr = function (ctx, current_cell, handler) {
                    return fun_with_meta(function (arg, cont) {
                        var f;
                        f = make_monadized_handler(ctx, current_cell, cont, handler);
                        return f(arg);
                    }, {
                        async: true,
                        arity: 2,
                        protocol: BUILTIN,
                        name: NESTED_EXPR
                    });
                };
                process_ast_handler_node = function (current_cell, ctx, handler) {
                    var USE_LAZY_PARTIAL_ARGS, arity, h, vargs, _get_cell, _ref5;
                    _get_cell = function (id) {
                        var cell;
                        cell = find_cell(id, current_cell, ctx);
                        if (!cell) {
                            error('Unknown cell referenced in handler', id, handler);
                            throw 'Unknown cell referenced in handler';
                        }
                        return cell;
                    };
                    switch (handler.type) {
                    case FUNCTION:
                        return dispatch_handler(handler.ns, handler.name, _get_cell(handler.scope || THIS));
                    case PARTIAL_FN:
                        USE_LAZY_PARTIAL_ARGS = true;
                        h = dispatch_handler(handler.fn.ns, handler.fn.name, _get_cell(handler.fn.scope || THIS));
                        if (USE_LAZY_PARTIAL_ARGS) {
                            _ref5 = h.meta, vargs = _ref5.vargs, arity = _ref5.arity;
                            return fun_with_meta(function () {
                                var accepted_args, args;
                                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                                accepted_args = args.slice(0, arity);
                                return process_ast_vector(handler.args, current_cell, ctx, function (calculated_args) {
                                    var cont, raw_accepted_args, _i;
                                    if (h.meta.async) {
                                        return h.apply(null, calculated_args.concat(accepted_args));
                                    } else {
                                        raw_accepted_args = 2 <= accepted_args.length ? __slice.call(accepted_args, 0, _i = accepted_args.length - 1) : (_i = 0, []), cont = accepted_args[_i++];
                                        return cont(h.apply(null, calculated_args.concat(raw_accepted_args)));
                                    }
                                });
                            }, {
                                arity: arity,
                                async: true,
                                name: 'partial application of ' + h.meta.name,
                                protocol: h.meta.protocol
                            });
                        } else {
                            return partial.apply(null, [h].concat(__slice.call(handler.args.map(function (_arg) {
                                var type, value;
                                type = _arg.type, value = _arg.value;
                                if (__indexOf.call(DNA_PRIMITIVES, type) < 0) {
                                    throw 'Only primitive datatypes accepted as partial args';
                                }
                                return get_primitive_value_handler(type, value)();
                            }))));
                        }
                        break;
                    case NESTED_EXPR:
                        return make_nested_expr(ctx, current_cell, handler.value);
                    case QUOTED_NESTED_EXPR:
                        throw 'QUOTED_NESTED_EXPR is not implemented yet';
                        break;
                    case NAN:
                    case NULL:
                    case KEYWORD:
                    case STRING:
                    case INTEGER:
                    case FLOAT:
                    case VECTOR:
                    case HASHMAP:
                    case RE:
                    case BQ:
                        return get_value_handler(handler.type, handler.value, _get_cell(handler.scope || THIS), ctx);
                    default:
                        error('Unknown expression type: ' + handler.type, handler);
                        throw 'Unknown expression type: ' + handler.type;
                    }
                };
                process_meta = function (cell, h) {
                    return h;
                };
                make_monadized_handler = function (ctx, cell, cont, handlr) {
                    var ast_parser, do_meta, lifted_handlers_chain, wrapper_monad;
                    ast_parser = partial(process_ast_handler_node, cell, ctx);
                    do_meta = partial(process_meta, cell);
                    lifted_handlers_chain = handlr.seq.map(compose3(lift, do_meta, ast_parser));
                    wrapper_monad = cont_t(logger_t(maybe_m({ is_error: is_null }), nullog));
                    return fun_with_meta(function (init_val) {
                        return domonad(wrapper_monad, lifted_handlers_chain, init_val)(cont);
                    }, {
                        async: true,
                        arity: 1,
                        name: 'monadized-handler'
                    });
                };
                bind_handlers_to_event = function (ctx, cell, handlers, event_node) {
                    var args, event_binder, name, ns, scope, type, _ref5;
                    _ref5 = event_node.type === 'partial-event' ? {
                        type: 'partial-event',
                        args: partial(process_ast_vector, event_node.args, cell, ctx),
                        name: event_node.event.name,
                        ns: event_node.event.ns,
                        scope: event_node.event.scope
                    } : {
                        type: 'event',
                        args: [],
                        name: event_node.name,
                        ns: event_node.ns,
                        scope: event_node.scope
                    }, type = _ref5.type, args = _ref5.args, name = _ref5.name, ns = _ref5.ns, scope = _ref5.scope;
                    event_binder = dispatch_handler(ns, name, find_cell(scope || THIS, cell, ctx));
                    return handlers.map(function (handlr) {
                        if (event_node.type === 'partial-event') {
                            return args(function (processed_args) {
                                return event_binder.apply(null, processed_args.concat([handlr]));
                            });
                        } else {
                            return event_binder.apply(null, args.concat([handlr]));
                        }
                    });
                };
                make_dynamic_handler = function (ctx, cell, cont, handlr) {
                    return function () {
                        var args, fresh_cell, h;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        fresh_cell = find_cell(cell.id, cell, ctx);
                        h = make_monadized_handler(ctx, fresh_cell, cont, handlr);
                        return h.apply(null, args);
                    };
                };
                process_subscribe = function (cell) {
                    var genes, genome_string;
                    if (cell.subscriptions_processed) {
                        return;
                    }
                    cell.subscriptions_processed = true;
                    genome_string = cell.ctx.dom_parser.getData(DNA_SUBSCRIBE, cell.node);
                    if (bool(genome_string)) {
                        genes = parse_genome(genome_string);
                        return genes.map(function (gene) {
                            return gene.events.map(partial(bind_handlers_to_event, cell.ctx, cell, gene.handlers.map(partial(make_dynamic_handler, cell.ctx, cell, default_handlers_cont))));
                        });
                    }
                };
                synthesize_cell = function (node, ctx, synthesis_id) {
                    var all_the_protocols, extended_protocols, proto_cell;
                    if (!node.id) {
                        node.id = ctx.dom_parser.get_id(node) || DNA_ID_PREFIX + Math.uuid();
                    }
                    proto_cell = {
                        id: node.id,
                        node: node,
                        receptors: {},
                        impls: {},
                        ctx: ctx,
                        synthesis_id: synthesis_id
                    };
                    extended_protocols = (extended_protocols = ctx.dom_parser.getData(DNA_EXTEND, node)) ? extended_protocols.split(' ').filter(function (i) {
                        return !!i;
                    }) : [];
                    all_the_protocols = distinct(extended_protocols.concat(ctx.default_protocols));
                    all_the_protocols.map(function (protocol) {
                        var p;
                        p = get_protocol(protocol);
                        proto_cell.impls[protocol] = dispatch_impl(protocol, node);
                        if (!is_object(proto_cell.impls[protocol])) {
                            error('Bad protocol implementation for DNA: ' + protocol, proto_cell.impls[protocol]);
                            throw 'Bad protocol implementation for DNA: ' + protocol + ' :: ' + proto_cell.impls[protocol];
                        }
                        if (p && proto_cell.impls[protocol]) {
                            return p.map(function (_arg) {
                                var args, m, name;
                                name = _arg[0], args = _arg[1];
                                m = {
                                    name: name,
                                    ns: protocol,
                                    impl: proto_cell.impls[protocol][name]
                                };
                                if (proto_cell.receptors[name]) {
                                    return proto_cell.receptors[name].push(m);
                                } else {
                                    return proto_cell.receptors[name] = [m];
                                }
                            });
                        }
                    });
                    return proto_cell;
                };
                create_cell = function (ctx, synthesis_id, node) {
                    var cell, maybe_id, old_cell, sid;
                    maybe_id = node.id;
                    sid = maybe_id && (old_cell = get_cell(maybe_id)) ? (debug('Reinstantiating cell with id ' + maybe_id), old_cell.synthesis_id + 1) : synthesis_id;
                    cell = synthesize_cell(node, ctx, sid);
                    save_cell(cell);
                    return cell;
                };
                synthesize_node = function (ctx) {
                    var START_TIME, active_nodes, creator, new_cells, root_node, synthesis_id;
                    START_TIME = new Date();
                    synthesis_id = 0;
                    root_node = ctx.dom_parser.get_root_node();
                    active_nodes = ctx.dom_parser.get_by_attr('[data-' + DNA_EXTEND + '], [data-' + DNA_SUBSCRIBE + ']');
                    creator = partial(create_cell, ctx, synthesis_id);
                    new_cells = active_nodes.map(creator);
                    return new_cells.map(process_subscribe);
                };
                X = {
                    get_cells: function () {
                        return lazy_init_state(get_state(MY_STATE)).CELLS;
                    },
                    get_cell: get_cell,
                    forget_cell: function (id) {
                        return swap_state(MY_STATE, function (old_state) {
                            var new_state;
                            new_state = lazy_init_state(old_state);
                            delete new_state.CELLS[id];
                            return new_state;
                        });
                    },
                    start_synthesis: function (root_node, default_protocols) {
                        var ctx;
                        if (!root_node) {
                            error('Root node not specified');
                            throw 'Root node not specified';
                        }
                        info('Synthesis started');
                        ctx = {
                            dom_parser: dispatch_impl('IDom', root_node),
                            default_protocols: default_protocols
                        };
                        observe_dom_added(root_node, function (new_dom) {
                            return setTimeout(function () {
                                return synthesize_node({
                                    dom_parser: dispatch_impl('IDom', new_dom),
                                    default_protocols: default_protocols
                                });
                            }, 10);
                        });
                        return synthesize_node(ctx);
                    },
                    synthesize_node: function (node, default_protocols) {
                        return synthesize_node({
                            dom_parser: dispatch_impl('IDom', node),
                            default_protocols: default_protocols
                        });
                    },
                    get_bound_method: function (cell, method_proto, method_name) {
                        var method_impl, method_inv;
                        method_inv = cell.receptors[method_name];
                        if (!method_inv) {
                            throw 'No method ' + method_name + '@' + cell.id;
                        }
                        if (method_proto === void 0 && method_inv.length === 1) {
                            return method_inv[0].impl;
                        } else {
                            method_impl = method_inv.filter(function (m) {
                                return m.ns === method_proto;
                            });
                            if (method_impl.length !== 1) {
                                throw 'No method ' + method_proto + '/' + method_name + '@' + cell.id;
                            }
                            return method_impl[0].impl;
                        }
                    },
                    call: function () {
                        var args, cellid, m, meth_name, meth_spec, mspec, ns, _ref5, _ref6;
                        mspec = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                        _ref5 = mspec.split('@'), meth_spec = _ref5[0], cellid = _ref5[1];
                        _ref6 = meth_spec.split('/'), ns = _ref6[0], meth_name = _ref6[1];
                        m = X.get_bound_method(X.get_cell(cellid), ns, meth_name);
                        return m.apply(null, args);
                    }
                };
                module.exports = X;
            }.call(this));
        }.call(this));
    }
});
dna_require.define('dom-mutation-observer', {
    'index': function (exports, dna_require, module) {
        (function () {
            (function () {
                var $, MutationObserver, debug, dispatch_impl, error, ie_version, info, isDOMAttrModifiedSupported, nullog, observe, observe_dom_added, pubsubhub, root, walkDOM, warn, _ref, __indexOf = [].indexOf || function (item) {
                        for (var i = 0, l = this.length; i < l; i++) {
                            if (i in this && this[i] === item)
                                return i;
                        }
                        return -1;
                    }, __slice = [].slice;
                root = window;
                $ = dna_require('jquery');
                pubsubhub = dna_require('libprotein').pubsubhub;
                dispatch_impl = dna_require('libprotocol').dispatch_impl;
                _ref = dispatch_impl('ILogger', 'MutationObserver'), info = _ref.info, warn = _ref.warn, error = _ref.error, debug = _ref.debug, nullog = _ref.nullog;
                ie_version = function () {
                    var myNav;
                    myNav = root.navigator.userAgent.toLowerCase();
                    if (__indexOf.call(myNav, 'msie') >= 0) {
                        return parseInt(myNav.split('msie')[1]);
                    } else {
                        return false;
                    }
                };
                MutationObserver = root.MutationObserver || root.WebKitMutationObserver || root.MozMutationObserver;
                isDOMAttrModifiedSupported = function () {
                    var flag, p;
                    p = root.document.createElement('p');
                    flag = false;
                    if (p.addEventListener) {
                        p.addEventListener('DOMAttrModified', function () {
                            return flag = true;
                        }, false);
                    } else if (p.attachEvent) {
                        p.attachEvent('onDOMAttrModified', function () {
                            return flag = true;
                        });
                    } else {
                        return false;
                    }
                    p.setAttribute('id', 'target');
                    return flag;
                }();
                observe = function (node, opts, handler) {
                    var observer;
                    if (MutationObserver) {
                        observer = new MutationObserver(function (mutations) {
                            return mutations.map(function (e) {
                                return handler(e.target, e.attributeName);
                            });
                        });
                        return observer.observe(node, {
                            attributes: true,
                            subtree: opts.subtree
                        });
                    } else if (isDOMAttrModifiedSupported) {
                        return $(node).bind('DOMAttrModified', function (e) {
                            return handler(this, e.attrName);
                        });
                    } else if (__indexOf.call(root.document.body, 'onpropertychange') >= 0) {
                        return $(node).bind('propertychange', function (e) {
                            return handler(this, root.event.propertyName);
                        });
                    } else {
                        throw 'DOM Mutation Observer not available';
                    }
                };
                walkDOM = function (node, f) {
                    var _results;
                    f(node);
                    node = node.firstChild;
                    _results = [];
                    while (node) {
                        walkDOM(node, f);
                        _results.push(node = node.nextSibling);
                    }
                    return _results;
                };
                observe_dom_added = function (root_node, cont) {
                    var dom_parser, e, get_wrapper, is_ie, patch, pub, sub, _ref1;
                    is_ie = ie_version();
                    if (is_ie && is_ie < 9) {
                        _ref1 = pubsubhub(), pub = _ref1.pub, sub = _ref1.sub;
                        get_wrapper = function (orig_fn_name) {
                            return function () {
                                var args, ret;
                                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                                ret = this[orig_fn_name].apply(this, args);
                                debug.apply(null, ['Patched call: ' + orig_fn_name + ' with args:'].concat(__slice.call(args)));
                                setTimeout(function () {
                                    return pub.apply(null, ['node_changed'].concat(__slice.call(args)));
                                }, 0);
                                return ret;
                            };
                        };
                        patch = function (o, fn_name) {
                            var orig_fn_name;
                            orig_fn_name = '_' + fn_name;
                            o.prototype[orig_fn_name] = o.prototype[fn_name];
                            return o.prototype[fn_name] = get_wrapper(orig_fn_name);
                        };
                        try {
                            [
                                'appendChild',
                                'insertChild',
                                'replaceChild',
                                'cloneNode',
                                'insertBefore'
                            ].map(function (fn_name) {
                                return patch(Element, fn_name);
                            });
                        } catch (_error) {
                            e = _error;
                            error('Can\'t init dom observer, don\'t use IE7');
                        }
                        return sub('node_changed', function () {
                            var node, _arg;
                            _arg = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                            node = _arg[0];
                            return cont(node);
                        });
                    } else {
                        dom_parser = dispatch_impl('IDom', root_node);
                        return dom_parser.add_event_listener('DOMNodeInserted', function (event) {
                            var dom_fragment_root;
                            dom_fragment_root = event.target;
                            if (dom_fragment_root._meta_mut_observer === true) {
                            } else {
                                walkDOM(dom_fragment_root, function (n) {
                                    return n._meta_mut_observer = true;
                                });
                                return cont(dom_fragment_root);
                            }
                        });
                    }
                };
                module.exports = {
                    observe: observe,
                    observe_dom_added: observe_dom_added
                };
            }.call(this));
        }.call(this));
    }
});
dna_require.define('genome-parser', {
    'index': function (exports, dna_require, module) {
        (function () {
            var parser = function () {
                var parser = {
                    trace: function trace() {
                    },
                    yy: {},
                    symbols_: {
                        'error': 2,
                        'program': 3,
                        'text': 4,
                        'EOF': 5,
                        'statement': 6,
                        ';': 7,
                        'event_binding_def': 8,
                        'events': 9,
                        'ESEP': 10,
                        'handlers': 11,
                        'event_expression': 12,
                        ',': 13,
                        'event': 14,
                        'values': 15,
                        'IDENTIFIER': 16,
                        '/': 17,
                        '@': 18,
                        'handler': 19,
                        'block': 20,
                        '|': 21,
                        'value': 22,
                        'fn': 23,
                        'primitive': 24,
                        'complex': 25,
                        'expr': 26,
                        '(': 27,
                        ')': 28,
                        'QUOTE': 29,
                        'NAN': 30,
                        'NULL': 31,
                        'KEYWORD': 32,
                        'STRING': 33,
                        'BQ': 34,
                        'RE': 35,
                        'number': 36,
                        'INT': 37,
                        'FLOAT': 38,
                        '[': 39,
                        'vector': 40,
                        ']': 41,
                        'vec_item': 42,
                        '$accept': 0,
                        '$end': 1
                    },
                    terminals_: {
                        2: 'error',
                        5: 'EOF',
                        7: ';',
                        10: 'ESEP',
                        13: ',',
                        16: 'IDENTIFIER',
                        17: '/',
                        18: '@',
                        21: '|',
                        27: '(',
                        28: ')',
                        29: 'QUOTE',
                        30: 'NAN',
                        31: 'NULL',
                        32: 'KEYWORD',
                        33: 'STRING',
                        34: 'BQ',
                        35: 'RE',
                        37: 'INT',
                        38: 'FLOAT',
                        39: '[',
                        41: ']'
                    },
                    productions_: [
                        0,
                        [
                            3,
                            0
                        ],
                        [
                            3,
                            2
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            4,
                            3
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            8,
                            3
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            9,
                            3
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            14,
                            3
                        ],
                        [
                            14,
                            3
                        ],
                        [
                            14,
                            5
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            11,
                            3
                        ],
                        [
                            19,
                            1
                        ],
                        [
                            19,
                            3
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            2
                        ],
                        [
                            15,
                            1
                        ],
                        [
                            15,
                            2
                        ],
                        [
                            22,
                            1
                        ],
                        [
                            22,
                            1
                        ],
                        [
                            22,
                            1
                        ],
                        [
                            26,
                            3
                        ],
                        [
                            26,
                            4
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            24,
                            1
                        ],
                        [
                            36,
                            1
                        ],
                        [
                            36,
                            1
                        ],
                        [
                            25,
                            3
                        ],
                        [
                            40,
                            0
                        ],
                        [
                            40,
                            2
                        ],
                        [
                            42,
                            1
                        ],
                        [
                            42,
                            1
                        ],
                        [
                            42,
                            1
                        ],
                        [
                            23,
                            1
                        ],
                        [
                            23,
                            3
                        ],
                        [
                            23,
                            3
                        ],
                        [
                            23,
                            5
                        ]
                    ],
                    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                        var $0 = $$.length - 1;
                        switch (yystate) {
                        case 2:
                            return $$[$0 - 1];
                            break;
                        case 3:
                            this.$ = [$$[$0]];
                            break;
                        case 4:
                            this.$ = $$[$0 - 2].concat($$[$0]);
                            break;
                        case 6:
                            this.$ = $$[$0];
                            break;
                        case 7:
                            this.$ = {
                                events: $$[$0 - 2],
                                handlers: $$[$0]
                            };
                            break;
                        case 8:
                            this.$ = [$$[$0]];
                            break;
                        case 9:
                            this.$ = $$[$0 - 2].concat([$$[$0]]);
                            break;
                        case 10:
                            this.$ = $$[$0];
                            break;
                        case 11:
                            this.$ = {
                                type: 'partial-event',
                                event: $$[$0 - 1],
                                args: $$[$0]
                            };
                            break;
                        case 12:
                            this.$ = {
                                ns: undefined,
                                name: $$[$0],
                                scope: undefined,
                                type: 'event'
                            };
                            break;
                        case 13:
                            this.$ = {
                                ns: $$[$0 - 2],
                                name: $$[$0 - 1],
                                scope: undefined,
                                type: 'event'
                            };
                            break;
                        case 14:
                            this.$ = {
                                ns: undefined,
                                name: $$[$0 - 2],
                                scope: $$[$0],
                                type: 'event'
                            };
                            break;
                        case 15:
                            this.$ = {
                                ns: $$[$0 - 4],
                                name: $$[$0 - 2],
                                scope: $$[$0],
                                type: 'event'
                            };
                            break;
                        case 16:
                            this.$ = [$$[$0]];
                            break;
                        case 17:
                            this.$ = $$[$0 - 2].concat([$$[$0]]);
                            break;
                        case 18:
                            this.$ = {
                                type: 'handler',
                                seq: [$$[$0]]
                            };
                            break;
                        case 19:
                            this.$ = {
                                type: 'handler',
                                seq: $$[$0 - 2].seq.concat([$$[$0]])
                            };
                            break;
                        case 20:
                            this.$ = $$[$0];
                            break;
                        case 21:
                            this.$ = $$[$0];
                            break;
                        case 22:
                            this.$ = {
                                type: 'partial',
                                fn: $$[$0 - 1],
                                args: $$[$0]
                            };
                            break;
                        case 23:
                            this.$ = [$$[$0]];
                            break;
                        case 24:
                            this.$ = $$[$0 - 1].concat([$$[$0]]);
                            break;
                        case 25:
                            this.$ = $$[$0];
                            break;
                        case 26:
                            this.$ = $$[$0];
                            break;
                        case 27:
                            this.$ = $$[$0];
                            break;
                        case 28:
                            this.$ = {
                                type: 'nested',
                                value: $$[$0 - 1]
                            };
                            break;
                        case 29:
                            this.$ = {
                                type: 'quoted-nested',
                                value: $$[$0 - 1]
                            };
                            break;
                        case 30:
                            this.$ = {
                                type: 'NaN',
                                value: NaN
                            };
                            break;
                        case 31:
                            this.$ = {
                                type: 'null',
                                value: null
                            };
                            break;
                        case 32:
                            this.$ = {
                                type: 'keyword',
                                value: $$[$0]
                            };
                            break;
                        case 33:
                            this.$ = {
                                type: 'string',
                                value: $$[$0].match('"(\\.|[^\\"]*?)"')[1]
                            };
                            break;
                        case 34:
                            this.$ = {
                                type: 'bq',
                                value: $$[$0].substr(1, $$[$0].length - 2)
                            };
                            break;
                        case 35:
                            this.$ = {
                                type: 're',
                                value: new RegExp($$[$0].substr(1, $$[$0].length - 2))
                            };
                            break;
                        case 36:
                            this.$ = $$[$0];
                            break;
                        case 37:
                            this.$ = {
                                type: 'integer',
                                value: parseInt($$[$0], 10)
                            };
                            break;
                        case 38:
                            this.$ = {
                                type: 'float',
                                value: parseFloat($$[$0], 10)
                            };
                            break;
                        case 39:
                            this.$ = {
                                type: 'vector',
                                value: $$[$0 - 1]
                            };
                            break;
                        case 40:
                            this.$ = [];
                            break;
                        case 41:
                            this.$ = $$[$0 - 1].concat([$$[$0]]);
                            break;
                        case 42:
                            this.$ = $$[$0];
                            break;
                        case 43:
                            this.$ = $$[$0];
                            break;
                        case 44:
                            this.$ = $$[$0];
                            break;
                        case 45:
                            this.$ = {
                                type: 'fn',
                                ns: undefined,
                                name: $$[$0],
                                scope: undefined
                            };
                            break;
                        case 46:
                            this.$ = {
                                type: 'fn',
                                ns: $$[$0 - 2],
                                name: $$[$0],
                                scope: undefined
                            };
                            break;
                        case 47:
                            this.$ = {
                                type: 'fn',
                                ns: undefined,
                                name: $$[$0 - 2],
                                scope: $$[$0]
                            };
                            break;
                        case 48:
                            this.$ = {
                                type: 'fn',
                                ns: $$[$0 - 4],
                                name: $$[$0 - 2],
                                scope: $$[$0]
                            };
                            break;
                        }
                    },
                    table: [
                        {
                            1: [
                                2,
                                1
                            ],
                            3: 1,
                            4: 2,
                            6: 3,
                            7: [
                                1,
                                4
                            ],
                            8: 5,
                            9: 6,
                            12: 7,
                            14: 8,
                            16: [
                                1,
                                9
                            ]
                        },
                        { 1: [3] },
                        {
                            5: [
                                1,
                                10
                            ],
                            7: [
                                1,
                                11
                            ]
                        },
                        {
                            5: [
                                2,
                                3
                            ],
                            7: [
                                2,
                                3
                            ]
                        },
                        {
                            5: [
                                2,
                                5
                            ],
                            7: [
                                2,
                                5
                            ]
                        },
                        {
                            5: [
                                2,
                                6
                            ],
                            7: [
                                2,
                                6
                            ]
                        },
                        {
                            10: [
                                1,
                                12
                            ],
                            13: [
                                1,
                                13
                            ]
                        },
                        {
                            10: [
                                2,
                                8
                            ],
                            13: [
                                2,
                                8
                            ]
                        },
                        {
                            10: [
                                2,
                                10
                            ],
                            13: [
                                2,
                                10
                            ],
                            15: 14,
                            22: 15,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            10: [
                                2,
                                12
                            ],
                            13: [
                                2,
                                12
                            ],
                            17: [
                                1,
                                31
                            ],
                            18: [
                                1,
                                32
                            ],
                            27: [
                                2,
                                12
                            ],
                            29: [
                                2,
                                12
                            ],
                            30: [
                                2,
                                12
                            ],
                            31: [
                                2,
                                12
                            ],
                            32: [
                                2,
                                12
                            ],
                            33: [
                                2,
                                12
                            ],
                            34: [
                                2,
                                12
                            ],
                            35: [
                                2,
                                12
                            ],
                            37: [
                                2,
                                12
                            ],
                            38: [
                                2,
                                12
                            ],
                            39: [
                                2,
                                12
                            ]
                        },
                        {
                            1: [
                                2,
                                2
                            ]
                        },
                        {
                            6: 33,
                            7: [
                                1,
                                4
                            ],
                            8: 5,
                            9: 6,
                            12: 7,
                            14: 8,
                            16: [
                                1,
                                9
                            ]
                        },
                        {
                            11: 34,
                            16: [
                                1,
                                39
                            ],
                            19: 35,
                            20: 36,
                            22: 37,
                            23: 38,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            12: 40,
                            14: 8,
                            16: [
                                1,
                                9
                            ]
                        },
                        {
                            10: [
                                2,
                                11
                            ],
                            13: [
                                2,
                                11
                            ],
                            22: 41,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            5: [
                                2,
                                23
                            ],
                            7: [
                                2,
                                23
                            ],
                            10: [
                                2,
                                23
                            ],
                            13: [
                                2,
                                23
                            ],
                            21: [
                                2,
                                23
                            ],
                            27: [
                                2,
                                23
                            ],
                            28: [
                                2,
                                23
                            ],
                            29: [
                                2,
                                23
                            ],
                            30: [
                                2,
                                23
                            ],
                            31: [
                                2,
                                23
                            ],
                            32: [
                                2,
                                23
                            ],
                            33: [
                                2,
                                23
                            ],
                            34: [
                                2,
                                23
                            ],
                            35: [
                                2,
                                23
                            ],
                            37: [
                                2,
                                23
                            ],
                            38: [
                                2,
                                23
                            ],
                            39: [
                                2,
                                23
                            ]
                        },
                        {
                            5: [
                                2,
                                25
                            ],
                            7: [
                                2,
                                25
                            ],
                            10: [
                                2,
                                25
                            ],
                            13: [
                                2,
                                25
                            ],
                            21: [
                                2,
                                25
                            ],
                            27: [
                                2,
                                25
                            ],
                            28: [
                                2,
                                25
                            ],
                            29: [
                                2,
                                25
                            ],
                            30: [
                                2,
                                25
                            ],
                            31: [
                                2,
                                25
                            ],
                            32: [
                                2,
                                25
                            ],
                            33: [
                                2,
                                25
                            ],
                            34: [
                                2,
                                25
                            ],
                            35: [
                                2,
                                25
                            ],
                            37: [
                                2,
                                25
                            ],
                            38: [
                                2,
                                25
                            ],
                            39: [
                                2,
                                25
                            ]
                        },
                        {
                            5: [
                                2,
                                26
                            ],
                            7: [
                                2,
                                26
                            ],
                            10: [
                                2,
                                26
                            ],
                            13: [
                                2,
                                26
                            ],
                            21: [
                                2,
                                26
                            ],
                            27: [
                                2,
                                26
                            ],
                            28: [
                                2,
                                26
                            ],
                            29: [
                                2,
                                26
                            ],
                            30: [
                                2,
                                26
                            ],
                            31: [
                                2,
                                26
                            ],
                            32: [
                                2,
                                26
                            ],
                            33: [
                                2,
                                26
                            ],
                            34: [
                                2,
                                26
                            ],
                            35: [
                                2,
                                26
                            ],
                            37: [
                                2,
                                26
                            ],
                            38: [
                                2,
                                26
                            ],
                            39: [
                                2,
                                26
                            ]
                        },
                        {
                            5: [
                                2,
                                27
                            ],
                            7: [
                                2,
                                27
                            ],
                            10: [
                                2,
                                27
                            ],
                            13: [
                                2,
                                27
                            ],
                            21: [
                                2,
                                27
                            ],
                            27: [
                                2,
                                27
                            ],
                            28: [
                                2,
                                27
                            ],
                            29: [
                                2,
                                27
                            ],
                            30: [
                                2,
                                27
                            ],
                            31: [
                                2,
                                27
                            ],
                            32: [
                                2,
                                27
                            ],
                            33: [
                                2,
                                27
                            ],
                            34: [
                                2,
                                27
                            ],
                            35: [
                                2,
                                27
                            ],
                            37: [
                                2,
                                27
                            ],
                            38: [
                                2,
                                27
                            ],
                            39: [
                                2,
                                27
                            ]
                        },
                        {
                            5: [
                                2,
                                30
                            ],
                            7: [
                                2,
                                30
                            ],
                            10: [
                                2,
                                30
                            ],
                            13: [
                                2,
                                30
                            ],
                            21: [
                                2,
                                30
                            ],
                            27: [
                                2,
                                30
                            ],
                            28: [
                                2,
                                30
                            ],
                            29: [
                                2,
                                30
                            ],
                            30: [
                                2,
                                30
                            ],
                            31: [
                                2,
                                30
                            ],
                            32: [
                                2,
                                30
                            ],
                            33: [
                                2,
                                30
                            ],
                            34: [
                                2,
                                30
                            ],
                            35: [
                                2,
                                30
                            ],
                            37: [
                                2,
                                30
                            ],
                            38: [
                                2,
                                30
                            ],
                            39: [
                                2,
                                30
                            ],
                            41: [
                                2,
                                30
                            ]
                        },
                        {
                            5: [
                                2,
                                31
                            ],
                            7: [
                                2,
                                31
                            ],
                            10: [
                                2,
                                31
                            ],
                            13: [
                                2,
                                31
                            ],
                            21: [
                                2,
                                31
                            ],
                            27: [
                                2,
                                31
                            ],
                            28: [
                                2,
                                31
                            ],
                            29: [
                                2,
                                31
                            ],
                            30: [
                                2,
                                31
                            ],
                            31: [
                                2,
                                31
                            ],
                            32: [
                                2,
                                31
                            ],
                            33: [
                                2,
                                31
                            ],
                            34: [
                                2,
                                31
                            ],
                            35: [
                                2,
                                31
                            ],
                            37: [
                                2,
                                31
                            ],
                            38: [
                                2,
                                31
                            ],
                            39: [
                                2,
                                31
                            ],
                            41: [
                                2,
                                31
                            ]
                        },
                        {
                            5: [
                                2,
                                32
                            ],
                            7: [
                                2,
                                32
                            ],
                            10: [
                                2,
                                32
                            ],
                            13: [
                                2,
                                32
                            ],
                            21: [
                                2,
                                32
                            ],
                            27: [
                                2,
                                32
                            ],
                            28: [
                                2,
                                32
                            ],
                            29: [
                                2,
                                32
                            ],
                            30: [
                                2,
                                32
                            ],
                            31: [
                                2,
                                32
                            ],
                            32: [
                                2,
                                32
                            ],
                            33: [
                                2,
                                32
                            ],
                            34: [
                                2,
                                32
                            ],
                            35: [
                                2,
                                32
                            ],
                            37: [
                                2,
                                32
                            ],
                            38: [
                                2,
                                32
                            ],
                            39: [
                                2,
                                32
                            ],
                            41: [
                                2,
                                32
                            ]
                        },
                        {
                            5: [
                                2,
                                33
                            ],
                            7: [
                                2,
                                33
                            ],
                            10: [
                                2,
                                33
                            ],
                            13: [
                                2,
                                33
                            ],
                            21: [
                                2,
                                33
                            ],
                            27: [
                                2,
                                33
                            ],
                            28: [
                                2,
                                33
                            ],
                            29: [
                                2,
                                33
                            ],
                            30: [
                                2,
                                33
                            ],
                            31: [
                                2,
                                33
                            ],
                            32: [
                                2,
                                33
                            ],
                            33: [
                                2,
                                33
                            ],
                            34: [
                                2,
                                33
                            ],
                            35: [
                                2,
                                33
                            ],
                            37: [
                                2,
                                33
                            ],
                            38: [
                                2,
                                33
                            ],
                            39: [
                                2,
                                33
                            ],
                            41: [
                                2,
                                33
                            ]
                        },
                        {
                            5: [
                                2,
                                34
                            ],
                            7: [
                                2,
                                34
                            ],
                            10: [
                                2,
                                34
                            ],
                            13: [
                                2,
                                34
                            ],
                            21: [
                                2,
                                34
                            ],
                            27: [
                                2,
                                34
                            ],
                            28: [
                                2,
                                34
                            ],
                            29: [
                                2,
                                34
                            ],
                            30: [
                                2,
                                34
                            ],
                            31: [
                                2,
                                34
                            ],
                            32: [
                                2,
                                34
                            ],
                            33: [
                                2,
                                34
                            ],
                            34: [
                                2,
                                34
                            ],
                            35: [
                                2,
                                34
                            ],
                            37: [
                                2,
                                34
                            ],
                            38: [
                                2,
                                34
                            ],
                            39: [
                                2,
                                34
                            ],
                            41: [
                                2,
                                34
                            ]
                        },
                        {
                            5: [
                                2,
                                35
                            ],
                            7: [
                                2,
                                35
                            ],
                            10: [
                                2,
                                35
                            ],
                            13: [
                                2,
                                35
                            ],
                            21: [
                                2,
                                35
                            ],
                            27: [
                                2,
                                35
                            ],
                            28: [
                                2,
                                35
                            ],
                            29: [
                                2,
                                35
                            ],
                            30: [
                                2,
                                35
                            ],
                            31: [
                                2,
                                35
                            ],
                            32: [
                                2,
                                35
                            ],
                            33: [
                                2,
                                35
                            ],
                            34: [
                                2,
                                35
                            ],
                            35: [
                                2,
                                35
                            ],
                            37: [
                                2,
                                35
                            ],
                            38: [
                                2,
                                35
                            ],
                            39: [
                                2,
                                35
                            ],
                            41: [
                                2,
                                35
                            ]
                        },
                        {
                            5: [
                                2,
                                36
                            ],
                            7: [
                                2,
                                36
                            ],
                            10: [
                                2,
                                36
                            ],
                            13: [
                                2,
                                36
                            ],
                            21: [
                                2,
                                36
                            ],
                            27: [
                                2,
                                36
                            ],
                            28: [
                                2,
                                36
                            ],
                            29: [
                                2,
                                36
                            ],
                            30: [
                                2,
                                36
                            ],
                            31: [
                                2,
                                36
                            ],
                            32: [
                                2,
                                36
                            ],
                            33: [
                                2,
                                36
                            ],
                            34: [
                                2,
                                36
                            ],
                            35: [
                                2,
                                36
                            ],
                            37: [
                                2,
                                36
                            ],
                            38: [
                                2,
                                36
                            ],
                            39: [
                                2,
                                36
                            ],
                            41: [
                                2,
                                36
                            ]
                        },
                        {
                            27: [
                                2,
                                40
                            ],
                            29: [
                                2,
                                40
                            ],
                            30: [
                                2,
                                40
                            ],
                            31: [
                                2,
                                40
                            ],
                            32: [
                                2,
                                40
                            ],
                            33: [
                                2,
                                40
                            ],
                            34: [
                                2,
                                40
                            ],
                            35: [
                                2,
                                40
                            ],
                            37: [
                                2,
                                40
                            ],
                            38: [
                                2,
                                40
                            ],
                            39: [
                                2,
                                40
                            ],
                            40: 42,
                            41: [
                                2,
                                40
                            ]
                        },
                        {
                            16: [
                                1,
                                39
                            ],
                            19: 43,
                            20: 36,
                            22: 37,
                            23: 38,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            27: [
                                1,
                                44
                            ]
                        },
                        {
                            5: [
                                2,
                                37
                            ],
                            7: [
                                2,
                                37
                            ],
                            10: [
                                2,
                                37
                            ],
                            13: [
                                2,
                                37
                            ],
                            21: [
                                2,
                                37
                            ],
                            27: [
                                2,
                                37
                            ],
                            28: [
                                2,
                                37
                            ],
                            29: [
                                2,
                                37
                            ],
                            30: [
                                2,
                                37
                            ],
                            31: [
                                2,
                                37
                            ],
                            32: [
                                2,
                                37
                            ],
                            33: [
                                2,
                                37
                            ],
                            34: [
                                2,
                                37
                            ],
                            35: [
                                2,
                                37
                            ],
                            37: [
                                2,
                                37
                            ],
                            38: [
                                2,
                                37
                            ],
                            39: [
                                2,
                                37
                            ],
                            41: [
                                2,
                                37
                            ]
                        },
                        {
                            5: [
                                2,
                                38
                            ],
                            7: [
                                2,
                                38
                            ],
                            10: [
                                2,
                                38
                            ],
                            13: [
                                2,
                                38
                            ],
                            21: [
                                2,
                                38
                            ],
                            27: [
                                2,
                                38
                            ],
                            28: [
                                2,
                                38
                            ],
                            29: [
                                2,
                                38
                            ],
                            30: [
                                2,
                                38
                            ],
                            31: [
                                2,
                                38
                            ],
                            32: [
                                2,
                                38
                            ],
                            33: [
                                2,
                                38
                            ],
                            34: [
                                2,
                                38
                            ],
                            35: [
                                2,
                                38
                            ],
                            37: [
                                2,
                                38
                            ],
                            38: [
                                2,
                                38
                            ],
                            39: [
                                2,
                                38
                            ],
                            41: [
                                2,
                                38
                            ]
                        },
                        {
                            16: [
                                1,
                                45
                            ]
                        },
                        {
                            16: [
                                1,
                                46
                            ]
                        },
                        {
                            5: [
                                2,
                                4
                            ],
                            7: [
                                2,
                                4
                            ]
                        },
                        {
                            5: [
                                2,
                                7
                            ],
                            7: [
                                2,
                                7
                            ],
                            13: [
                                1,
                                47
                            ]
                        },
                        {
                            5: [
                                2,
                                16
                            ],
                            7: [
                                2,
                                16
                            ],
                            13: [
                                2,
                                16
                            ],
                            21: [
                                1,
                                48
                            ]
                        },
                        {
                            5: [
                                2,
                                18
                            ],
                            7: [
                                2,
                                18
                            ],
                            13: [
                                2,
                                18
                            ],
                            21: [
                                2,
                                18
                            ],
                            28: [
                                2,
                                18
                            ]
                        },
                        {
                            5: [
                                2,
                                20
                            ],
                            7: [
                                2,
                                20
                            ],
                            13: [
                                2,
                                20
                            ],
                            21: [
                                2,
                                20
                            ],
                            28: [
                                2,
                                20
                            ]
                        },
                        {
                            5: [
                                2,
                                21
                            ],
                            7: [
                                2,
                                21
                            ],
                            13: [
                                2,
                                21
                            ],
                            15: 49,
                            21: [
                                2,
                                21
                            ],
                            22: 15,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            28: [
                                2,
                                21
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            5: [
                                2,
                                45
                            ],
                            7: [
                                2,
                                45
                            ],
                            13: [
                                2,
                                45
                            ],
                            17: [
                                1,
                                50
                            ],
                            18: [
                                1,
                                51
                            ],
                            21: [
                                2,
                                45
                            ],
                            27: [
                                2,
                                45
                            ],
                            28: [
                                2,
                                45
                            ],
                            29: [
                                2,
                                45
                            ],
                            30: [
                                2,
                                45
                            ],
                            31: [
                                2,
                                45
                            ],
                            32: [
                                2,
                                45
                            ],
                            33: [
                                2,
                                45
                            ],
                            34: [
                                2,
                                45
                            ],
                            35: [
                                2,
                                45
                            ],
                            37: [
                                2,
                                45
                            ],
                            38: [
                                2,
                                45
                            ],
                            39: [
                                2,
                                45
                            ]
                        },
                        {
                            10: [
                                2,
                                9
                            ],
                            13: [
                                2,
                                9
                            ]
                        },
                        {
                            5: [
                                2,
                                24
                            ],
                            7: [
                                2,
                                24
                            ],
                            10: [
                                2,
                                24
                            ],
                            13: [
                                2,
                                24
                            ],
                            21: [
                                2,
                                24
                            ],
                            27: [
                                2,
                                24
                            ],
                            28: [
                                2,
                                24
                            ],
                            29: [
                                2,
                                24
                            ],
                            30: [
                                2,
                                24
                            ],
                            31: [
                                2,
                                24
                            ],
                            32: [
                                2,
                                24
                            ],
                            33: [
                                2,
                                24
                            ],
                            34: [
                                2,
                                24
                            ],
                            35: [
                                2,
                                24
                            ],
                            37: [
                                2,
                                24
                            ],
                            38: [
                                2,
                                24
                            ],
                            39: [
                                2,
                                24
                            ]
                        },
                        {
                            24: 54,
                            25: 55,
                            26: 56,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ],
                            41: [
                                1,
                                52
                            ],
                            42: 53
                        },
                        {
                            21: [
                                1,
                                48
                            ],
                            28: [
                                1,
                                57
                            ]
                        },
                        {
                            16: [
                                1,
                                39
                            ],
                            19: 58,
                            20: 36,
                            22: 37,
                            23: 38,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            10: [
                                2,
                                13
                            ],
                            13: [
                                2,
                                13
                            ],
                            18: [
                                1,
                                59
                            ],
                            27: [
                                2,
                                13
                            ],
                            29: [
                                2,
                                13
                            ],
                            30: [
                                2,
                                13
                            ],
                            31: [
                                2,
                                13
                            ],
                            32: [
                                2,
                                13
                            ],
                            33: [
                                2,
                                13
                            ],
                            34: [
                                2,
                                13
                            ],
                            35: [
                                2,
                                13
                            ],
                            37: [
                                2,
                                13
                            ],
                            38: [
                                2,
                                13
                            ],
                            39: [
                                2,
                                13
                            ]
                        },
                        {
                            10: [
                                2,
                                14
                            ],
                            13: [
                                2,
                                14
                            ],
                            27: [
                                2,
                                14
                            ],
                            29: [
                                2,
                                14
                            ],
                            30: [
                                2,
                                14
                            ],
                            31: [
                                2,
                                14
                            ],
                            32: [
                                2,
                                14
                            ],
                            33: [
                                2,
                                14
                            ],
                            34: [
                                2,
                                14
                            ],
                            35: [
                                2,
                                14
                            ],
                            37: [
                                2,
                                14
                            ],
                            38: [
                                2,
                                14
                            ],
                            39: [
                                2,
                                14
                            ]
                        },
                        {
                            16: [
                                1,
                                39
                            ],
                            19: 60,
                            20: 36,
                            22: 37,
                            23: 38,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            16: [
                                1,
                                39
                            ],
                            20: 61,
                            22: 37,
                            23: 38,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            5: [
                                2,
                                22
                            ],
                            7: [
                                2,
                                22
                            ],
                            13: [
                                2,
                                22
                            ],
                            21: [
                                2,
                                22
                            ],
                            22: 41,
                            24: 16,
                            25: 17,
                            26: 18,
                            27: [
                                1,
                                27
                            ],
                            28: [
                                2,
                                22
                            ],
                            29: [
                                1,
                                28
                            ],
                            30: [
                                1,
                                19
                            ],
                            31: [
                                1,
                                20
                            ],
                            32: [
                                1,
                                21
                            ],
                            33: [
                                1,
                                22
                            ],
                            34: [
                                1,
                                23
                            ],
                            35: [
                                1,
                                24
                            ],
                            36: 25,
                            37: [
                                1,
                                29
                            ],
                            38: [
                                1,
                                30
                            ],
                            39: [
                                1,
                                26
                            ]
                        },
                        {
                            16: [
                                1,
                                62
                            ]
                        },
                        {
                            16: [
                                1,
                                63
                            ]
                        },
                        {
                            5: [
                                2,
                                39
                            ],
                            7: [
                                2,
                                39
                            ],
                            10: [
                                2,
                                39
                            ],
                            13: [
                                2,
                                39
                            ],
                            21: [
                                2,
                                39
                            ],
                            27: [
                                2,
                                39
                            ],
                            28: [
                                2,
                                39
                            ],
                            29: [
                                2,
                                39
                            ],
                            30: [
                                2,
                                39
                            ],
                            31: [
                                2,
                                39
                            ],
                            32: [
                                2,
                                39
                            ],
                            33: [
                                2,
                                39
                            ],
                            34: [
                                2,
                                39
                            ],
                            35: [
                                2,
                                39
                            ],
                            37: [
                                2,
                                39
                            ],
                            38: [
                                2,
                                39
                            ],
                            39: [
                                2,
                                39
                            ],
                            41: [
                                2,
                                39
                            ]
                        },
                        {
                            27: [
                                2,
                                41
                            ],
                            29: [
                                2,
                                41
                            ],
                            30: [
                                2,
                                41
                            ],
                            31: [
                                2,
                                41
                            ],
                            32: [
                                2,
                                41
                            ],
                            33: [
                                2,
                                41
                            ],
                            34: [
                                2,
                                41
                            ],
                            35: [
                                2,
                                41
                            ],
                            37: [
                                2,
                                41
                            ],
                            38: [
                                2,
                                41
                            ],
                            39: [
                                2,
                                41
                            ],
                            41: [
                                2,
                                41
                            ]
                        },
                        {
                            27: [
                                2,
                                42
                            ],
                            29: [
                                2,
                                42
                            ],
                            30: [
                                2,
                                42
                            ],
                            31: [
                                2,
                                42
                            ],
                            32: [
                                2,
                                42
                            ],
                            33: [
                                2,
                                42
                            ],
                            34: [
                                2,
                                42
                            ],
                            35: [
                                2,
                                42
                            ],
                            37: [
                                2,
                                42
                            ],
                            38: [
                                2,
                                42
                            ],
                            39: [
                                2,
                                42
                            ],
                            41: [
                                2,
                                42
                            ]
                        },
                        {
                            27: [
                                2,
                                43
                            ],
                            29: [
                                2,
                                43
                            ],
                            30: [
                                2,
                                43
                            ],
                            31: [
                                2,
                                43
                            ],
                            32: [
                                2,
                                43
                            ],
                            33: [
                                2,
                                43
                            ],
                            34: [
                                2,
                                43
                            ],
                            35: [
                                2,
                                43
                            ],
                            37: [
                                2,
                                43
                            ],
                            38: [
                                2,
                                43
                            ],
                            39: [
                                2,
                                43
                            ],
                            41: [
                                2,
                                43
                            ]
                        },
                        {
                            27: [
                                2,
                                44
                            ],
                            29: [
                                2,
                                44
                            ],
                            30: [
                                2,
                                44
                            ],
                            31: [
                                2,
                                44
                            ],
                            32: [
                                2,
                                44
                            ],
                            33: [
                                2,
                                44
                            ],
                            34: [
                                2,
                                44
                            ],
                            35: [
                                2,
                                44
                            ],
                            37: [
                                2,
                                44
                            ],
                            38: [
                                2,
                                44
                            ],
                            39: [
                                2,
                                44
                            ],
                            41: [
                                2,
                                44
                            ]
                        },
                        {
                            5: [
                                2,
                                28
                            ],
                            7: [
                                2,
                                28
                            ],
                            10: [
                                2,
                                28
                            ],
                            13: [
                                2,
                                28
                            ],
                            21: [
                                2,
                                28
                            ],
                            27: [
                                2,
                                28
                            ],
                            28: [
                                2,
                                28
                            ],
                            29: [
                                2,
                                28
                            ],
                            30: [
                                2,
                                28
                            ],
                            31: [
                                2,
                                28
                            ],
                            32: [
                                2,
                                28
                            ],
                            33: [
                                2,
                                28
                            ],
                            34: [
                                2,
                                28
                            ],
                            35: [
                                2,
                                28
                            ],
                            37: [
                                2,
                                28
                            ],
                            38: [
                                2,
                                28
                            ],
                            39: [
                                2,
                                28
                            ],
                            41: [
                                2,
                                28
                            ]
                        },
                        {
                            21: [
                                1,
                                48
                            ],
                            28: [
                                1,
                                64
                            ]
                        },
                        {
                            16: [
                                1,
                                65
                            ]
                        },
                        {
                            5: [
                                2,
                                17
                            ],
                            7: [
                                2,
                                17
                            ],
                            13: [
                                2,
                                17
                            ],
                            21: [
                                1,
                                48
                            ]
                        },
                        {
                            5: [
                                2,
                                19
                            ],
                            7: [
                                2,
                                19
                            ],
                            13: [
                                2,
                                19
                            ],
                            21: [
                                2,
                                19
                            ],
                            28: [
                                2,
                                19
                            ]
                        },
                        {
                            5: [
                                2,
                                46
                            ],
                            7: [
                                2,
                                46
                            ],
                            13: [
                                2,
                                46
                            ],
                            18: [
                                1,
                                66
                            ],
                            21: [
                                2,
                                46
                            ],
                            27: [
                                2,
                                46
                            ],
                            28: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            30: [
                                2,
                                46
                            ],
                            31: [
                                2,
                                46
                            ],
                            32: [
                                2,
                                46
                            ],
                            33: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            35: [
                                2,
                                46
                            ],
                            37: [
                                2,
                                46
                            ],
                            38: [
                                2,
                                46
                            ],
                            39: [
                                2,
                                46
                            ]
                        },
                        {
                            5: [
                                2,
                                47
                            ],
                            7: [
                                2,
                                47
                            ],
                            13: [
                                2,
                                47
                            ],
                            21: [
                                2,
                                47
                            ],
                            27: [
                                2,
                                47
                            ],
                            28: [
                                2,
                                47
                            ],
                            29: [
                                2,
                                47
                            ],
                            30: [
                                2,
                                47
                            ],
                            31: [
                                2,
                                47
                            ],
                            32: [
                                2,
                                47
                            ],
                            33: [
                                2,
                                47
                            ],
                            34: [
                                2,
                                47
                            ],
                            35: [
                                2,
                                47
                            ],
                            37: [
                                2,
                                47
                            ],
                            38: [
                                2,
                                47
                            ],
                            39: [
                                2,
                                47
                            ]
                        },
                        {
                            5: [
                                2,
                                29
                            ],
                            7: [
                                2,
                                29
                            ],
                            10: [
                                2,
                                29
                            ],
                            13: [
                                2,
                                29
                            ],
                            21: [
                                2,
                                29
                            ],
                            27: [
                                2,
                                29
                            ],
                            28: [
                                2,
                                29
                            ],
                            29: [
                                2,
                                29
                            ],
                            30: [
                                2,
                                29
                            ],
                            31: [
                                2,
                                29
                            ],
                            32: [
                                2,
                                29
                            ],
                            33: [
                                2,
                                29
                            ],
                            34: [
                                2,
                                29
                            ],
                            35: [
                                2,
                                29
                            ],
                            37: [
                                2,
                                29
                            ],
                            38: [
                                2,
                                29
                            ],
                            39: [
                                2,
                                29
                            ],
                            41: [
                                2,
                                29
                            ]
                        },
                        {
                            10: [
                                2,
                                15
                            ],
                            13: [
                                2,
                                15
                            ],
                            27: [
                                2,
                                15
                            ],
                            29: [
                                2,
                                15
                            ],
                            30: [
                                2,
                                15
                            ],
                            31: [
                                2,
                                15
                            ],
                            32: [
                                2,
                                15
                            ],
                            33: [
                                2,
                                15
                            ],
                            34: [
                                2,
                                15
                            ],
                            35: [
                                2,
                                15
                            ],
                            37: [
                                2,
                                15
                            ],
                            38: [
                                2,
                                15
                            ],
                            39: [
                                2,
                                15
                            ]
                        },
                        {
                            16: [
                                1,
                                67
                            ]
                        },
                        {
                            5: [
                                2,
                                48
                            ],
                            7: [
                                2,
                                48
                            ],
                            13: [
                                2,
                                48
                            ],
                            21: [
                                2,
                                48
                            ],
                            27: [
                                2,
                                48
                            ],
                            28: [
                                2,
                                48
                            ],
                            29: [
                                2,
                                48
                            ],
                            30: [
                                2,
                                48
                            ],
                            31: [
                                2,
                                48
                            ],
                            32: [
                                2,
                                48
                            ],
                            33: [
                                2,
                                48
                            ],
                            34: [
                                2,
                                48
                            ],
                            35: [
                                2,
                                48
                            ],
                            37: [
                                2,
                                48
                            ],
                            38: [
                                2,
                                48
                            ],
                            39: [
                                2,
                                48
                            ]
                        }
                    ],
                    defaultActions: {
                        10: [
                            2,
                            2
                        ]
                    },
                    parseError: function parseError(str, hash) {
                        if (hash.recoverable) {
                            this.trace(str);
                        } else {
                            throw new Error(str);
                        }
                    },
                    parse: function parse(input) {
                        var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
                        var args = lstack.slice.call(arguments, 1);
                        this.lexer.setInput(input);
                        this.lexer.yy = this.yy;
                        this.yy.lexer = this.lexer;
                        this.yy.parser = this;
                        if (typeof this.lexer.yylloc == 'undefined') {
                            this.lexer.yylloc = {};
                        }
                        var yyloc = this.lexer.yylloc;
                        lstack.push(yyloc);
                        var ranges = this.lexer.options && this.lexer.options.ranges;
                        if (typeof this.yy.parseError === 'function') {
                            this.parseError = this.yy.parseError;
                        } else {
                            this.parseError = Object.getPrototypeOf(this).parseError;
                        }
                        function popStack(n) {
                            stack.length = stack.length - 2 * n;
                            vstack.length = vstack.length - n;
                            lstack.length = lstack.length - n;
                        }
                        function lex() {
                            var token;
                            token = self.lexer.lex() || EOF;
                            if (typeof token !== 'number') {
                                token = self.symbols_[token] || token;
                            }
                            return token;
                        }
                        var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
                        while (true) {
                            state = stack[stack.length - 1];
                            if (this.defaultActions[state]) {
                                action = this.defaultActions[state];
                            } else {
                                if (symbol === null || typeof symbol == 'undefined') {
                                    symbol = lex();
                                }
                                action = table[state] && table[state][symbol];
                            }
                            if (typeof action === 'undefined' || !action.length || !action[0]) {
                                var errStr = '';
                                expected = [];
                                for (p in table[state]) {
                                    if (this.terminals_[p] && p > TERROR) {
                                        expected.push('\'' + this.terminals_[p] + '\'');
                                    }
                                }
                                if (this.lexer.showPosition) {
                                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                                } else {
                                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                                }
                                this.parseError(errStr, {
                                    text: this.lexer.match,
                                    token: this.terminals_[symbol] || symbol,
                                    line: this.lexer.yylineno,
                                    loc: yyloc,
                                    expected: expected
                                });
                            }
                            if (action[0] instanceof Array && action.length > 1) {
                                throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                            }
                            switch (action[0]) {
                            case 1:
                                stack.push(symbol);
                                vstack.push(this.lexer.yytext);
                                lstack.push(this.lexer.yylloc);
                                stack.push(action[1]);
                                symbol = null;
                                if (!preErrorSymbol) {
                                    yyleng = this.lexer.yyleng;
                                    yytext = this.lexer.yytext;
                                    yylineno = this.lexer.yylineno;
                                    yyloc = this.lexer.yylloc;
                                    if (recovering > 0) {
                                        recovering--;
                                    }
                                } else {
                                    symbol = preErrorSymbol;
                                    preErrorSymbol = null;
                                }
                                break;
                            case 2:
                                len = this.productions_[action[1]][1];
                                yyval.$ = vstack[vstack.length - len];
                                yyval._$ = {
                                    first_line: lstack[lstack.length - (len || 1)].first_line,
                                    last_line: lstack[lstack.length - 1].last_line,
                                    first_column: lstack[lstack.length - (len || 1)].first_column,
                                    last_column: lstack[lstack.length - 1].last_column
                                };
                                if (ranges) {
                                    yyval._$.range = [
                                        lstack[lstack.length - (len || 1)].range[0],
                                        lstack[lstack.length - 1].range[1]
                                    ];
                                }
                                r = this.performAction.apply(yyval, [
                                    yytext,
                                    yyleng,
                                    yylineno,
                                    this.yy,
                                    action[1],
                                    vstack,
                                    lstack
                                ].concat(args));
                                if (typeof r !== 'undefined') {
                                    return r;
                                }
                                if (len) {
                                    stack = stack.slice(0, -1 * len * 2);
                                    vstack = vstack.slice(0, -1 * len);
                                    lstack = lstack.slice(0, -1 * len);
                                }
                                stack.push(this.productions_[action[1]][0]);
                                vstack.push(yyval.$);
                                lstack.push(yyval._$);
                                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                stack.push(newState);
                                break;
                            case 3:
                                return true;
                            }
                        }
                        return true;
                    }
                };
                var lexer = function () {
                    var lexer = {
                        EOF: 1,
                        parseError: function parseError(str, hash) {
                            if (this.yy.parser) {
                                this.yy.parser.parseError(str, hash);
                            } else {
                                throw new Error(str);
                            }
                        },
                        setInput: function (input) {
                            this._input = input;
                            this._more = this._backtrack = this.done = false;
                            this.yylineno = this.yyleng = 0;
                            this.yytext = this.matched = this.match = '';
                            this.conditionStack = ['INITIAL'];
                            this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            };
                            if (this.options.ranges) {
                                this.yylloc.range = [
                                    0,
                                    0
                                ];
                            }
                            this.offset = 0;
                            return this;
                        },
                        input: function () {
                            var ch = this._input[0];
                            this.yytext += ch;
                            this.yyleng++;
                            this.offset++;
                            this.match += ch;
                            this.matched += ch;
                            var lines = ch.match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno++;
                                this.yylloc.last_line++;
                            } else {
                                this.yylloc.last_column++;
                            }
                            if (this.options.ranges) {
                                this.yylloc.range[1]++;
                            }
                            this._input = this._input.slice(1);
                            return ch;
                        },
                        unput: function (ch) {
                            var len = ch.length;
                            var lines = ch.split(/(?:\r\n?|\n)/g);
                            this._input = ch + this._input;
                            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                            this.offset -= len;
                            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1);
                            this.matched = this.matched.substr(0, this.matched.length - 1);
                            if (lines.length - 1) {
                                this.yylineno -= lines.length - 1;
                            }
                            var r = this.yylloc.range;
                            this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                            };
                            if (this.options.ranges) {
                                this.yylloc.range = [
                                    r[0],
                                    r[0] + this.yyleng - len
                                ];
                            }
                            this.yyleng = this.yytext.length;
                            return this;
                        },
                        more: function () {
                            this._more = true;
                            return this;
                        },
                        reject: function () {
                            if (this.options.backtrack_lexer) {
                                this._backtrack = true;
                            } else {
                                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                                    text: '',
                                    token: null,
                                    line: this.yylineno
                                });
                            }
                            return this;
                        },
                        less: function (n) {
                            this.unput(this.match.slice(n));
                        },
                        pastInput: function () {
                            var past = this.matched.substr(0, this.matched.length - this.match.length);
                            return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '');
                        },
                        upcomingInput: function () {
                            var next = this.match;
                            if (next.length < 20) {
                                next += this._input.substr(0, 20 - next.length);
                            }
                            return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '');
                        },
                        showPosition: function () {
                            var pre = this.pastInput();
                            var c = new Array(pre.length + 1).join('-');
                            return pre + this.upcomingInput() + '\n' + c + '^';
                        },
                        test_match: function (match, indexed_rule) {
                            var token, lines, backup;
                            if (this.options.backtrack_lexer) {
                                backup = {
                                    yylineno: this.yylineno,
                                    yylloc: {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.last_line,
                                        first_column: this.yylloc.first_column,
                                        last_column: this.yylloc.last_column
                                    },
                                    yytext: this.yytext,
                                    match: this.match,
                                    matches: this.matches,
                                    matched: this.matched,
                                    yyleng: this.yyleng,
                                    offset: this.offset,
                                    _more: this._more,
                                    _input: this._input,
                                    yy: this.yy,
                                    conditionStack: this.conditionStack.slice(0),
                                    done: this.done
                                };
                                if (this.options.ranges) {
                                    backup.yylloc.range = this.yylloc.range.slice(0);
                                }
                            }
                            lines = match[0].match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno += lines.length;
                            }
                            this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                            };
                            this.yytext += match[0];
                            this.match += match[0];
                            this.matches = match;
                            this.yyleng = this.yytext.length;
                            if (this.options.ranges) {
                                this.yylloc.range = [
                                    this.offset,
                                    this.offset += this.yyleng
                                ];
                            }
                            this._more = false;
                            this._backtrack = false;
                            this._input = this._input.slice(match[0].length);
                            this.matched += match[0];
                            token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                            if (this.done && this._input) {
                                this.done = false;
                            }
                            if (token) {
                                return token;
                            } else if (this._backtrack) {
                                for (var k in backup) {
                                    this[k] = backup[k];
                                }
                                return false;
                            }
                            return false;
                        },
                        next: function () {
                            if (this.done) {
                                return this.EOF;
                            }
                            if (!this._input) {
                                this.done = true;
                            }
                            var token, match, tempMatch, index;
                            if (!this._more) {
                                this.yytext = '';
                                this.match = '';
                            }
                            var rules = this._currentRules();
                            for (var i = 0; i < rules.length; i++) {
                                tempMatch = this._input.match(this.rules[rules[i]]);
                                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                    match = tempMatch;
                                    index = i;
                                    if (this.options.backtrack_lexer) {
                                        token = this.test_match(tempMatch, rules[i]);
                                        if (token !== false) {
                                            return token;
                                        } else if (this._backtrack) {
                                            match = false;
                                            continue;
                                        } else {
                                            return false;
                                        }
                                    } else if (!this.options.flex) {
                                        break;
                                    }
                                }
                            }
                            if (match) {
                                token = this.test_match(match, rules[index]);
                                if (token !== false) {
                                    return token;
                                }
                                return false;
                            }
                            if (this._input === '') {
                                return this.EOF;
                            } else {
                                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                                    text: '',
                                    token: null,
                                    line: this.yylineno
                                });
                            }
                        },
                        lex: function lex() {
                            var r = this.next();
                            if (r) {
                                return r;
                            } else {
                                return this.lex();
                            }
                        },
                        begin: function begin(condition) {
                            this.conditionStack.push(condition);
                        },
                        popState: function popState() {
                            var n = this.conditionStack.length - 1;
                            if (n > 0) {
                                return this.conditionStack.pop();
                            } else {
                                return this.conditionStack[0];
                            }
                        },
                        _currentRules: function _currentRules() {
                            if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                            } else {
                                return this.conditions['INITIAL'].rules;
                            }
                        },
                        topState: function topState(n) {
                            n = this.conditionStack.length - 1 - Math.abs(n || 0);
                            if (n >= 0) {
                                return this.conditionStack[n];
                            } else {
                                return 'INITIAL';
                            }
                        },
                        pushState: function pushState(condition) {
                            this.begin(condition);
                        },
                        stateStackSize: function stateStackSize() {
                            return this.conditionStack.length;
                        },
                        options: {},
                        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                            var YYSTATE = YY_START;
                            switch ($avoiding_name_collisions) {
                            case 0:
                                break;
                            case 1:
                                return 38;
                                break;
                            case 2:
                                return 37;
                                break;
                            case 3:
                                return 34;
                                break;
                            case 4:
                                return 33;
                                break;
                            case 5:
                                return 30;
                                break;
                            case 6:
                                return 31;
                                break;
                            case 7:
                                return 32;
                                break;
                            case 8:
                                return 10;
                                break;
                            case 9:
                                return 16;
                                break;
                            case 10:
                                return 'DBLQUOTE';
                                break;
                            case 11:
                                return 29;
                                break;
                            case 12:
                                return 27;
                                break;
                            case 13:
                                return 28;
                                break;
                            case 14:
                                return 39;
                                break;
                            case 15:
                                return 41;
                                break;
                            case 16:
                                return '^';
                                break;
                            case 17:
                                return 18;
                                break;
                            case 18:
                                return 21;
                                break;
                            case 19:
                                return 13;
                                break;
                            case 20:
                                return 17;
                                break;
                            case 21:
                                return 7;
                                break;
                            case 22:
                                return ':';
                                break;
                            case 23:
                                return 35;
                                break;
                            case 24:
                                return 5;
                                break;
                            case 25:
                                return 'INVALID';
                                break;
                            }
                        },
                        rules: [
                            /^(?:\s+)/,
                            /^(?:[0-9]+\.[0-9]*)/,
                            /^(?:[0-9]+)/,
                            /^(?:`.*`)/,
                            /^(?:"(\\.|[^\\"]*?)")/,
                            /^(?:NaN\b)/,
                            /^(?:null\b)/,
                            /^(?::([a-z0-9]+))/,
                            /^(?::)/,
                            /^(?:[A-Za-z_\-<>+*=$#%^&!?][A-Za-z0-9_\-<>+*=$#%^&!?]*)/,
                            /^(?:")/,
                            /^(?:')/,
                            /^(?:\()/,
                            /^(?:\))/,
                            /^(?:\[)/,
                            /^(?:\])/,
                            /^(?:\^)/,
                            /^(?:@)/,
                            /^(?:\|)/,
                            /^(?:,)/,
                            /^(?:\/)/,
                            /^(?:;)/,
                            /^(?::)/,
                            /^(?:\/(?:[^\/]|\\\/)*\/)/,
                            /^(?:$)/,
                            /^(?:.)/
                        ],
                        conditions: {
                            'INITIAL': {
                                'rules': [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25
                                ],
                                'inclusive': true
                            }
                        }
                    };
                    return lexer;
                }();
                parser.lexer = lexer;
                function Parser() {
                    this.yy = {};
                }
                Parser.prototype = parser;
                parser.Parser = Parser;
                return new Parser();
            }();
            if (typeof dna_require !== 'undefined' && typeof exports !== 'undefined') {
                exports.parser = parser;
                exports.Parser = parser.Parser;
                exports.parse = function () {
                    return parser.parse.apply(parser, arguments);
                };
                exports.main = function commonjsMain(args) {
                    if (!args[1]) {
                        console.log('Usage: ' + args[0] + ' FILE');
                        process.exit(1);
                    }
                    var source = dna_require('fs').readFileSync(dna_require('path').normalize(args[1]), 'utf8');
                    return exports.parser.parse(source);
                };
                if (typeof module !== 'undefined' && dna_require.main === module) {
                    exports.main(process.argv.slice(1));
                }
            }
        }.call(this));
    }
});
dna_require.define('', {
    'dnawrapper': function (exports, dna_require, module) {
        (function () {
            (function () {
                module.exports = {
                    setProtocols: function(ps) {
                       window._libprotocol_cache = window._libprotocol_cache || [];
                       window._libprotocol_cache.push(ps);
                    },
                    run: function () {
                        var dna;
                        window._libprotocol_cache = window._libprotocol_cache || [];
                        window._libprotocol_cache.push({
                                'IDom': ['dc-idom/index'],
                                'ILogger': ['console-logger'],
                                'IHelper': ['dc-helper/index']
                        });
                        window.AppState || (window.AppState = {});

                        dna = dna_require('dna-lang');
                        return dna.start_synthesis(document.body, [
                            'IDom',
                            'IHelper'
                        ]);
                    }
                };
            }.call(this));
        }.call(this));
    }
});