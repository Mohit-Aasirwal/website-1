var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/ktscates/Desktop/Alby Project/website/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7K5QC7IS.css";

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-5HVOVQJU.css";

// route-module:/home/ktscates/Desktop/Alby Project/website/app/root.jsx
function links() {
  return [
    {
      rel: "preload",
      href: "/images/diamond-wallet-layer.svg",
      as: "image",
      type: "image/svg+xml"
    },
    {
      rel: "preload",
      href: "/images/diamond-footer.svg",
      as: "image",
      type: "image/svg+xml"
    },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: tailwind_default2 }
  ];
}
function meta() {
  return { title: "Get Alby" };
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/home/ktscates/Desktop/Alby Project/website/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/components/Footer.jsx
init_react();

// public/images/right-bee.svg
var right_bee_default = "/build/_assets/right-bee-KYOFL22K.svg";

// public/images/left-bee.svg
var left_bee_default = "/build/_assets/left-bee-XBDAIRXK.svg";

// public/images/pointer.svg
var pointer_default = "/build/_assets/pointer-ELH565BS.svg";

// public/images/Telegram.svg
var Telegram_default = "/build/_assets/Telegram-TN7KZNK4.svg";

// public/images/Twitter.svg
var Twitter_default = "/build/_assets/Twitter-ZJQWD2HR.svg";

// public/images/GitHub.svg
var GitHub_default = "/build/_assets/GitHub-F6ASPHY2.svg";

// app/components/Footer.jsx
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white z-10 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center hover:cursor-pointer mt-4 lg:mt-24 py-8 lg:py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[91.46%] lg:w-[85.76%] mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "z-10"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative"
  }, "You don\u2019t have a Lightning Address yet?", /* @__PURE__ */ React.createElement("span", {
    className: "absolute top-1/2 md:top-[82%] right-0 lg:right-[27.5%] hidden lg:inline-block"
  }, " ", /* @__PURE__ */ React.createElement("img", {
    src: pointer_default
  }))), /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 relative text-albyColdGray-800 text-lg font-medium py-3 lg:py-4 px-4 lg:px-16 rounded-[1.875rem] mt-4"
  }, "Learn more"), /* @__PURE__ */ React.createElement("img", {
    src: right_bee_default,
    alt: "Right Bee",
    className: "w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%] hidden md:block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: left_bee_default,
    alt: "Left Bee",
    className: "w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[91%] hidden md:block"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-end bg-albyYellow-300 py-14 lg:py-32 mt-4 lg:mt-32"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "w-11/12 text-center md:w-full font-primary font-bold text-2xl md:text-5xl mx-auto"
  }, "Do you have feedback or need help?"), /* @__PURE__ */ React.createElement("div", {
    className: "md:w-[52.84%] w-11/12 mx-auto pt-8 text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: " font-primary font-normal text-lg md:text-2xl leading-[2.25rem] text-albyColdGray-800"
  }, "Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online. We love to hear from you. File a", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby/lightning-browser-extension/issues",
    className: "underline"
  }, "Github issue"), " ", "or join the", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    className: "underline"
  }, "Telegram channel"), "."), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-center pt-10"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/getalby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Twitter_default,
    alt: "Twitter Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://t.me/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Telegram_default,
    alt: "Telegram Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/getAlby",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: GitHub_default,
    alt: "GitHub Logo",
    className: "mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "https://getalby.com/privacy-policy",
    className: "text-center lg:text-2xl text-base font-primary underline pt-5"
  }, "Privacy Policy"))));
}
var Footer_default = Footer;

// app/components/Header.jsx
init_react();

// public/images/Logo.svg
var Logo_default = "/build/_assets/Logo-4A6ZFMFX.svg";

// public/images/header-illustration.svg
var header_illustration_default = "/build/_assets/header-illustration-6WXMSZQB.svg";

// public/images/button-below.svg
var button_below_default = "/build/_assets/button-below-Y2YUHB4G.svg";

// public/images/header-below.svg
var header_below_default = "/build/_assets/header-below-7GSV5UJ7.svg";

// public/images/group-diamond.svg
var group_diamond_default = "/build/_assets/group-diamond-VZXRWIZY.svg";

// app/components/Header.jsx
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-albyYellow-300 lg:min-h-screen grid place-items-center relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:w-[93.194%] w-[91.46%] mx-auto "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex top-0 pt-5 items-center absolute lg:w-[93.194%] w-[91.46%] justify-between max-h-[6.25rem]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: Logo_default,
    alt: "Logo",
    className: "w-auto lg:h-[3.75rem] h-[2.75rem]"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end gap-5 justify-between relative"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-transparent text-albyWarmGray-800 border-2 border-solid border-albyWarmGray-800 font-primary  lg:inline-block text-sm md:text-lg lg:leading-[1.75rem] font-semibold py-2 lg:py-4 px-3 lg:px-6 rounded-[30px]"
  }, "Install Alby"), /* @__PURE__ */ React.createElement("img", {
    src: button_below_default,
    alt: "Below Button Illustration",
    className: "absolute w-auto hidden lg:inline-block left-[80%] top-[67%]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary pt-[6.5rem] lg:pt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-6xl md:text-4xl text-3xl font-black"
  }, "Direct contributions from your audience"), /* @__PURE__ */ React.createElement("p", {
    className: "lg:text-2xl text-base font-normal pt-9"
  }, "Use a Lightning Address to receive value for value payments in Bitcoin from your audience")), /* @__PURE__ */ React.createElement("div", {
    className: "pt-10 lg:pt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    src: header_illustration_default,
    alt: "Header Illustration",
    className: "w-[42vw] mx-auto min-w-[19rem] h-auto z-10 relative"
  }), /* @__PURE__ */ React.createElement("img", {
    src: header_below_default,
    alt: "Below Header Illustration",
    className: "absolute w-auto hidden lg:inline-block left-[88%] top-[72%] z-0"
  })))), /* @__PURE__ */ React.createElement("img", {
    src: group_diamond_default,
    alt: "Group Diamond",
    className: "absolute w-auto  left-0 bottom-0 z-0 hidden lg:inline-block"
  }));
}
var Header_default = Header;

// app/components/Services.jsx
init_react();

// public/images/lines.svg
var lines_default = "/build/_assets/lines-SIFGI3T2.svg";

// public/images/wallet.svg
var wallet_default = "/build/_assets/wallet-FGXPBRZS.svg";

// public/images/waves.svg
var waves_default = "/build/_assets/waves-H4FSRQOP.svg";

// public/images/puzzle.svg
var puzzle_default = "/build/_assets/puzzle-KAQ7FVXA.svg";

// app/components/Services.jsx
function Services() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:w-full py-12 bg-albyYellow-50 xl:px-37 xl:pt-33 xl:pb-40"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-10 xl:space-y-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:space-x-21 grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: lines_default,
    alt: "lines"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-6.5"
  }, "Use existing ", /* @__PURE__ */ React.createElement("br", null), "platforms")), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: wallet_default,
    alt: "wallet"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-6.5"
  }, "Receive payments", /* @__PURE__ */ React.createElement("br", null), " directly"))), /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex xl:space-x-21 grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: waves_default,
    alt: "waves"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-5"
  }, "Non-intrusive and", /* @__PURE__ */ React.createElement("br", null), " frictionless for your", /* @__PURE__ */ React.createElement("br", null), " audience")), /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center mr-2.5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:mt-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: puzzle_default,
    alt: "puzzle"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl text-center pt-5"
  }, "Simple integration;", /* @__PURE__ */ React.createElement("br", null), " no coding skills", /* @__PURE__ */ React.createElement("br", null), " needed")))));
}

// app/components/Payment.jsx
init_react();

// public/images/code.svg
var code_default = "/build/_assets/code-YNBT4BTR.svg";

// public/images/code-mobile.svg
var code_mobile_default = "/build/_assets/code-mobile-G3ORRXAY.svg";

// public/images/twitter-illustration.svg
var twitter_illustration_default = "/build/_assets/twitter-illustration-UG66NKDG.svg";

// public/images/twitter-mobile.svg
var twitter_mobile_default = "/build/_assets/twitter-mobile-IOBK7EUZ.svg";

// public/images/youtube-illustration.svg
var youtube_illustration_default = "/build/_assets/youtube-illustration-SJ6RG2KF.svg";

// public/images/youtube-mobile.svg
var youtube_mobile_default = "/build/_assets/youtube-mobile-S5Y2AXIT.svg";

// public/images/bitcoin-illustration.svg
var bitcoin_illustration_default = "/build/_assets/bitcoin-illustration-VTZMQQ4T.svg";

// public/images/bitcoin-mobile.svg
var bitcoin_mobile_default = "/build/_assets/bitcoin-mobile-C2GKXED6.svg";

// app/components/Payment.jsx
function Payment() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "xl:pt-40.5 pt-20 lg:w-[93.3%] w-[91.46%] mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "xl:text-5xxl lg:text-center font-black lg:text-3xl text-2xl"
  }, "Receiving payments on", /* @__PURE__ */ React.createElement("br", null), "  existing platforms"), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "Your own Website"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold text-lg"
  }, "How to receive contributions on your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the HTML header section of your website:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, ' <meta name="lightning" content="you@lightning.address"/>')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center -mt-3 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Make sure to have an og:image meta tag: ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", {
    className: "break-all"
  }, '<meta property="og:image" content="https://www.youre.blog/YOUR_IMAGE" />')))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "3")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your website successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: code_default,
    className: "hidden lg:inline-block",
    alt: "code"
  }), /* @__PURE__ */ React.createElement("img", {
    src: code_mobile_default,
    className: "shadow-2xl  block lg:hidden mt-4",
    alt: "code"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black  lg:text-2xl text-xl"
  }, "Twitter"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-semibold lg:text-xl text-lg"
  }, "How to receive contributions on your website"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of your Twtter profile: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your Twitter profile successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: twitter_mobile_default,
    alt: "code",
    className: "shadow-2xl  block lg:hidden mt-4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "YouTube"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-bold lg:text-xl text-lg"
  }, "How to receive contributions on YouTube"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your YouTube channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your YouTube video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: youtube_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: youtube_mobile_default,
    alt: "code",
    className: "shadow-2xl  block lg:hidden mt-4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: " xl:grid xl:grid-cols-2 place-items-center pt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:space-y-6 space-y-2 xl:ml-17 order-last"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl"
  }, "Bitcoin TV"), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-3xl font-bold lg:text-xl text-lg"
  }, "How to receive contributions on BitcoinTV"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, /* @__PURE__ */ React.createElement("p", null, "Add this in the description of a video in your BitcoinTV channel: ", /* @__PURE__ */ React.createElement("b", null, "\u26A1you@lightning.address")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center mt-2 xl:mt-0"
  }, "2")), /* @__PURE__ */ React.createElement("p", {
    className: "xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3"
  }, "Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension")))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_illustration_default,
    alt: "code",
    className: "hidden lg:inline-block"
  }), /* @__PURE__ */ React.createElement("img", {
    src: bitcoin_mobile_default,
    alt: "code",
    className: "shadow-2xl  block lg:hidden mt-4"
  }))));
}

// app/components/Wallet.jsx
init_react();
function Wallet() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "  py-[8rem] relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-[91.46%] text-center md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "md:text-5xl text-3xl font-black text-albyColdGray-25"
  }, "This new way of monetization is brought to you by Alby"), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-2xl text-base font-normal text-albyColdGray-25 pt-4"
  }, "Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby\u2019s wallet and start transacting in Bitcoin with ease."), /* @__PURE__ */ React.createElement("button", {
    className: "bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 lg:py-4 px-4 lg:px-8 rounded-[1.875rem] mt-4"
  }, "Try it now")));
}
var Wallet_default = Wallet;

// route-module:/home/ktscates/Desktop/Alby Project/website/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Payment, null), /* @__PURE__ */ React.createElement(Wallet_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2t0c2NhdGVzL0Rlc2t0b3AvQWxieSBQcm9qZWN0L3dlYnNpdGUvYXBwL3Jvb3QuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGF5bWVudC5qc3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2FsbGV0LmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUva3RzY2F0ZXMvRGVza3RvcC9BbGJ5IFByb2plY3Qvd2Vic2l0ZS9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9rdHNjYXRlcy9EZXNrdG9wL0FsYnkgUHJvamVjdC93ZWJzaXRlL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcblx0cmVxdWVzdCxcblx0cmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRyZXNwb25zZUhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dFxuKSB7XG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdCk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcblx0fSk7XG59XG4iLCAiaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb25cbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IGV4dGVuZFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcblx0cmV0dXJuIFsge1xuXHRcdHJlbDogXCJwcmVsb2FkXCIsXG5cdFx0aHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtd2FsbGV0LWxheWVyLnN2Z1wiLFxuXHRcdGFzOiBcImltYWdlXCIsXG5cdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCJcblx0fSxcblx0e1xuXHRcdHJlbDogXCJwcmVsb2FkXCIsXG5cdFx0aHJlZjogXCIvaW1hZ2VzL2RpYW1vbmQtZm9vdGVyLnN2Z1wiLFxuXHRcdGFzOiBcImltYWdlXCIsXG5cdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCJcblx0fSxcblx0eyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcblx0eyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleHRlbmRTdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuXHRyZXR1cm4geyB0aXRsZTogXCJHZXQgQWxieVwiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwifi9jb21wb25lbnRzL1NlcnZpY2VzXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwifi9jb21wb25lbnRzL1BheW1lbnRcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIn4vY29tcG9uZW50cy9XYWxsZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxTZXJ2aWNlIC8+XG5cdFx0XHQ8UGF5bWVudCAvPlxuXHRcdFx0PFdhbGxldCAvPlxuXHRcdFx0PEZvb3RlciAvPlx0XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IFJpZ2h0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3JpZ2h0LWJlZS5zdmdcIjtcbmltcG9ydCBMZWZ0QmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xlZnQtYmVlLnN2Z1wiO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wb2ludGVyLnN2Z1wiO1xuaW1wb3J0IFRlbGVncmFtTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9UZWxlZ3JhbS5zdmdcIjtcbmltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9Ud2l0dGVyLnN2Z1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvR2l0SHViLnN2Z1wiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB6LTEwIFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBob3ZlcjpjdXJzb3ItcG9pbnRlciBtdC00IGxnOm10LTI0IHB5LTggbGc6cHktWzguNzVyZW1dIHRleHQtY2VudGVyIHJvdW5kZWQtWzIuNzVyZW1dIG1heC1oLVszMS4yNXJlbV0gbWF4LXctWzc3LjE4NzVyZW1dIHJlbGF0aXZlIGJnLWFsYnlZZWxsb3ctNTAgdy1bOTEuNDYlXSBsZzp3LVs4NS43NiVdIG14LWF1dG9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInctWzc4JV0gbXgtYXV0byAgZm9udC1wcmltYXJ5IHRleHQtM3hsIG1kOnRleHQtNnhsIG1kOmxlYWRpbmctWzQuNjg3NXJlbV0gZm9udC1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgWW91IGRvblx1MjAxOXQgaGF2ZSBhIExpZ2h0bmluZyBBZGRyZXNzIHlldD9cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbWQ6dG9wLVs4MiVdIHJpZ2h0LTAgbGc6cmlnaHQtWzI3LjUlXSBoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0Fycm93SWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYmctYWxieVllbGxvdy0zMDAgcmVsYXRpdmUgdGV4dC1hbGJ5Q29sZEdyYXktODAwIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMyBsZzpweS00IHB4LTQgbGc6cHgtMTYgcm91bmRlZC1bMS44NzVyZW1dIG10LTRcIj5cbiAgICAgICAgICAgIExlYXJuIG1vcmVcblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9e1JpZ2h0QmVlfVxuXHRcdFx0XHRcdFx0YWx0PVwiUmlnaHQgQmVlXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctYXV0byBteC1hdXRvIGFic29sdXRlIGJvdHRvbS1bOCVdIGxlZnQtWzcwJV0gbWQ6bGVmdC1bODUlXSBoaWRkZW4gbWQ6YmxvY2tcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXtMZWZ0QmVlfVxuXHRcdFx0XHRcdFx0YWx0PVwiTGVmdCBCZWVcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1hdXRvIG14LWF1dG8gYWJzb2x1dGUgYm90dG9tLVsxNCVdIGxlZnQtWzgyJV0gbWQ6bGVmdC1bOTElXSBoaWRkZW4gbWQ6YmxvY2tcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtZW5kIGJnLWFsYnlZZWxsb3ctMzAwIHB5LTE0IGxnOnB5LTMyIG10LTQgbGc6bXQtMzJcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInctMTEvMTIgdGV4dC1jZW50ZXIgbWQ6dy1mdWxsIGZvbnQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC0yeGwgbWQ6dGV4dC01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIERvIHlvdSBoYXZlIGZlZWRiYWNrIG9yIG5lZWQgaGVscD9cblx0XHRcdFx0PC9oMz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZDp3LVs1Mi44NCVdIHctMTEvMTIgbXgtYXV0byBwdC04IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiIGZvbnQtcHJpbWFyeSBmb250LW5vcm1hbCB0ZXh0LWxnIG1kOnRleHQtMnhsIGxlYWRpbmctWzIuMjVyZW1dIHRleHQtYWxieUNvbGRHcmF5LTgwMFwiPlxuICAgICAgICAgICAgQWxieSBpcyBvcGVuLXNvdXJjZSBhbmQgY3VycmVudGx5IGluIGFscGhhIHN0YWdlLiBPdXIgZ29hbCBpcyB0b1xuICAgICAgICAgICAgY3JlYXRlIHRoZSBiZXN0IG9ubGluZSBleHBlcmllbmNlIHRvIGNvbnN1bWUgYW5kIHJld2FyZCBjb250ZW50IGFuZFxuICAgICAgICAgICAgc2VydmljZXMgb25saW5lLiBXZSBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuIEZpbGUgYXtcIiBcIn1cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieS9saWdodG5pbmctYnJvd3Nlci1leHRlbnNpb24vaXNzdWVzXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcblx0XHRcdFx0XHRcdD5cbiAgICAgICAgICAgICAgR2l0aHViIGlzc3VlXG5cdFx0XHRcdFx0XHQ8L2E+e1wiIFwifVxuICAgICAgICAgICAgb3Igam9pbiB0aGV7XCIgXCJ9XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgVGVsZWdyYW0gY2hhbm5lbFxuXHRcdFx0XHRcdFx0PC9hPlxuICAgICAgICAgICAgLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC01IGp1c3RpZnktY2VudGVyIHB0LTEwXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9nZXRhbGJ5XCJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUd2l0dGVyTG9nb30gYWx0PVwiVHdpdHRlciBMb2dvXCIgY2xhc3NOYW1lPVwibWItNCB3LVszOXB4XSBoLVszNXB4XSBsZzp3LVs1Mi42N3B4XSBsZzpoLVs0OHB4XVwiIC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly90Lm1lL2dldEFsYnlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtUZWxlZ3JhbUxvZ299IGFsdD1cIlRlbGVncmFtIExvZ29cIiBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCIgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2V0QWxieVwiXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17R2l0SHViTG9nb30gYWx0PVwiR2l0SHViIExvZ29cIiBjbGFzc05hbWU9XCJtYi00IHctWzM5cHhdIGgtWzM1cHhdIGxnOnctWzUyLjY3cHhdIGxnOmgtWzQ4cHhdXCIgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZ2V0YWxieS5jb20vcHJpdmFjeS1wb2xpY3lcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC0yeGwgdGV4dC1iYXNlIGZvbnQtcHJpbWFyeSB1bmRlcmxpbmUgcHQtNVwiXG5cdFx0XHRcdFx0PlxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9Mb2dvLnN2Z1wiO1xuaW1wb3J0IEhlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IEJlbG93QnV0dG9uSWxsdXN0cmF0aW9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2J1dHRvbi1iZWxvdy5zdmdcIjtcbmltcG9ydCBCZWxvd0hlYWRlcklsbHVzdHJhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9oZWFkZXItYmVsb3cuc3ZnXCI7XG5pbXBvcnQgR3JvdXBEaWFtb25kIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2dyb3VwLWRpYW1vbmQuc3ZnXCI7XG5cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGJnLWFsYnlZZWxsb3ctMzAwIGxnOm1pbi1oLXNjcmVlbiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzp3LVs5My4xOTQlXSB3LVs5MS40NiVdIG14LWF1dG8gXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0b3AtMCBwdC01IGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBsZzp3LVs5My4xOTQlXSB3LVs5MS40NiVdIGp1c3RpZnktYmV0d2VlbiBtYXgtaC1bNi4yNXJlbV1cIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0xvZ299IGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJ3LWF1dG8gbGc6aC1bMy43NXJlbV0gaC1bMi43NXJlbV1cIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTUganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYWxieVdhcm1HcmF5LTgwMCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFsYnlXYXJtR3JheS04MDAgZm9udC1wcmltYXJ5ICBsZzppbmxpbmUtYmxvY2sgdGV4dC1zbSBtZDp0ZXh0LWxnIGxnOmxlYWRpbmctWzEuNzVyZW1dIGZvbnQtc2VtaWJvbGQgcHktMiBsZzpweS00IHB4LTMgbGc6cHgtNiByb3VuZGVkLVszMHB4XVwiPlxuXHRcdFx0XHRcdFx0XHRJbnN0YWxsIEFsYnlcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0JlbG93QnV0dG9uSWxsdXN0cmF0aW9ufSBhbHQ9XCJCZWxvdyBCdXR0b24gSWxsdXN0cmF0aW9uXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1hdXRvIGhpZGRlbiBsZzppbmxpbmUtYmxvY2sgbGVmdC1bODAlXSB0b3AtWzY3JV1cIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBsZzppdGVtcy1baW5oZXJpdF0ganVzdGlmeS1iZXR3ZWVuIGZvbnQtcHJpbWFyeSBwdC1bNi41cmVtXSBsZzpwdC0wXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDptYXgtdy1bMzkuNzVyZW1dIGxnOnctMS8yIHRleHQtYWxieUNvbGRHcmF5LTgwMCB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ4bDp0ZXh0LTZ4bCBtZDp0ZXh0LTR4bCB0ZXh0LTN4bCBmb250LWJsYWNrXCI+XG4gICAgICAgICAgICAgIERpcmVjdCBjb250cmlidXRpb25zIGZyb20geW91ciBhdWRpZW5jZVxuXHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxnOnRleHQtMnhsIHRleHQtYmFzZSBmb250LW5vcm1hbCBwdC05XCI+XG4gICAgICAgICAgICAgIFVzZSBhIExpZ2h0bmluZyBBZGRyZXNzIHRvIHJlY2VpdmUgdmFsdWUgZm9yIHZhbHVlIHBheW1lbnRzIGluIEJpdGNvaW4gZnJvbSB5b3VyIGF1ZGllbmNlIFxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgbGc6cHQtNDBcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtIZWFkZXJJbGx1c3RyYXRpb259IGFsdD1cIkhlYWRlciBJbGx1c3RyYXRpb25cIiBjbGFzc05hbWU9XCJ3LVs0MnZ3XSBteC1hdXRvIG1pbi13LVsxOXJlbV0gaC1hdXRvIHotMTAgcmVsYXRpdmVcIiAvPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0JlbG93SGVhZGVySWxsdXN0cmF0aW9ufSBhbHQ9XCJCZWxvdyBIZWFkZXIgSWxsdXN0cmF0aW9uXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1hdXRvIGhpZGRlbiBsZzppbmxpbmUtYmxvY2sgbGVmdC1bODglXSB0b3AtWzcyJV0gei0wXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbWcgc3JjPXtHcm91cERpYW1vbmR9IGFsdD1cIkdyb3VwIERpYW1vbmRcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWF1dG8gIGxlZnQtMCBib3R0b20tMCB6LTAgaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsICJpbXBvcnQgTGluZXMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvbGluZXMuc3ZnXCI7XG5pbXBvcnQgV2FsbGV0IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhbGxldC5zdmdcIjtcbmltcG9ydCBXYXZlcyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy93YXZlcy5zdmdcIjtcbmltcG9ydCBQdXp6bGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvcHV6emxlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcbiAgICBcblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6dy1mdWxsIHB5LTEyIGJnLWFsYnlZZWxsb3ctNTAgeGw6cHgtMzcgeGw6cHQtMzMgeGw6cGItNDBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpqdXN0aWZ5LWNlbnRlciB4bDppdGVtcy1jZW50ZXIgeGw6c3BhY2UteC0yMSBzcGFjZS15LTEwIHhsOnNwYWNlLXktMCBteC1hdXRvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6ZmxleCB4bDpzcGFjZS14LTIxIGdyaWQgZ3JpZC1jb2xzLTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17TGluZXN9IGFsdD1cImxpbmVzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNi41XCI+VXNlIGV4aXN0aW5nIDxici8+cGxhdGZvcm1zPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e1dhbGxldH0gYWx0PVwid2FsbGV0XCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNi41XCI+UmVjZWl2ZSBwYXltZW50czxici8+IGRpcmVjdGx5PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggeGw6c3BhY2UteC0yMSBncmlkIGdyaWQtY29scy0yXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDptdC04XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtXYXZlc30gYWx0PVwid2F2ZXNcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBwdC01XCI+Tm9uLWludHJ1c2l2ZSBhbmQ8YnIvPiBmcmljdGlvbmxlc3MgZm9yIHlvdXI8YnIvPiBhdWRpZW5jZTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgbXItMi41XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOm10LThcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e1B1enpsZX0gYWx0PVwicHV6emxlXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgdGV4dC1jZW50ZXIgcHQtNVwiPlNpbXBsZSBpbnRlZ3JhdGlvbjs8YnIvPiBubyBjb2Rpbmcgc2tpbGxzPGJyLz4gbmVlZGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PiAgICBcblx0KTtcbn0iLCAiaW1wb3J0IENvZGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvY29kZS5zdmdcIjtcbmltcG9ydCBDb2RlTW9iaWxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NvZGUtbW9iaWxlLnN2Z1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdHdpdHRlci1pbGx1c3RyYXRpb24uc3ZnXCI7XG5pbXBvcnQgVHdpdHRlck1vYmlsZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90d2l0dGVyLW1vYmlsZS5zdmdcIjtcbmltcG9ydCBZb3V0dWJlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3lvdXR1YmUtaWxsdXN0cmF0aW9uLnN2Z1wiO1xuaW1wb3J0IFlvdXR1YmVNb2JpbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMveW91dHViZS1tb2JpbGUuc3ZnXCI7XG5pbXBvcnQgQml0Y29pbiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9iaXRjb2luLWlsbHVzdHJhdGlvbi5zdmdcIjtcbmltcG9ydCBCaXRjb2luTW9iaWxlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2JpdGNvaW4tbW9iaWxlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6cHQtNDAuNSBwdC0yMCBsZzp3LVs5My4zJV0gdy1bOTEuNDYlXSBteC1hdXRvXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwieGw6dGV4dC01eHhsIGxnOnRleHQtY2VudGVyIGZvbnQtYmxhY2sgbGc6dGV4dC0zeGwgdGV4dC0yeGxcIj5SZWNlaXZpbmcgcGF5bWVudHMgb248YnIgLz4gIGV4aXN0aW5nIHBsYXRmb3JtczwvaDE+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnNwYWNlLXktNiBzcGFjZS15LTIgeGw6bWwtMTdcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIGxnOnRleHQtMnhsIHRleHQteGxcIj5Zb3VyIG93biBXZWJzaXRlPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtbGdcIj5Ib3cgdG8gcmVjZWl2ZSBjb250cmlidXRpb25zIG9uIHlvdXIgd2Vic2l0ZTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+QWRkIHRoaXMgaW4gdGhlIEhUTUwgaGVhZGVyIHNlY3Rpb24gb2YgeW91ciB3ZWJzaXRlOlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIvPjxiIGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPiAmbHQ7bWV0YSBuYW1lPSZxdW90O2xpZ2h0bmluZyZxdW90OyBjb250ZW50PSZxdW90O3lvdUBsaWdodG5pbmcuYWRkcmVzcyZxdW90Oy8mZ3Q7PC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEwIGgtOCBwLTVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIC1tdC0zIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPk1ha2Ugc3VyZSB0byBoYXZlIGFuIG9nOmltYWdlIG1ldGEgdGFnOiA8YnIvPjxiIGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPiZsdDttZXRhIHByb3BlcnR5PSZxdW90O29nOmltYWdlJnF1b3Q7IGNvbnRlbnQ9JnF1b3Q7aHR0cHM6Ly93d3cueW91cmUuYmxvZy9ZT1VSX0lNQUdFJnF1b3Q7IC8mZ3Q7PC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4zPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgd2Vic2l0ZSBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17Q29kZX0gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtDb2RlTW9iaWxlfSBjbGFzc05hbWU9XCJzaGFkb3ctMnhsICBibG9jayBsZzpoaWRkZW4gbXQtNFwiIGFsdD1cImNvZGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS0yIHhsOm1sLTE3IG9yZGVyLWxhc3RcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrICBsZzp0ZXh0LTJ4bCB0ZXh0LXhsXCI+VHdpdHRlcjwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCBsZzp0ZXh0LXhsIHRleHQtbGdcIj5Ib3cgdG8gcmVjZWl2ZSBjb250cmlidXRpb25zIG9uIHlvdXIgd2Vic2l0ZTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIHlvdXIgVHd0dGVyIHByb2ZpbGU6IDxiPlx1MjZBMXlvdUBsaWdodG5pbmcuYWRkcmVzczwvYj5cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTMuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMiB4bDptdC0wXCI+MjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+VmVyaWZ5IGlmIHlvdSBlbmhhbmNlZCB5b3VyIFR3aXR0ZXIgcHJvZmlsZSBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17VHdpdHRlcn0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtUd2l0dGVyTW9iaWxlfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwic2hhZG93LTJ4bCAgYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS0yIHhsOm1sLTE3XCI+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInhsOnRleHQtNHhsIHhsOmxlYWRpbmctMTAgZm9udC1ibGFjayBsZzp0ZXh0LTJ4bCB0ZXh0LXhsXCI+WW91VHViZTwvaDM+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0zeGwgZm9udC1ib2xkIGxnOnRleHQteGwgdGV4dC1sZ1wiPkhvdyB0byByZWNlaXZlIGNvbnRyaWJ1dGlvbnMgb24gWW91VHViZTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS05XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiMnhsOnRleHQtM3hsIHhsOnRleHQtMnhsIHhsOmxlYWRpbmctOSBmb250LWJsYWNrIGJnLWFsYnlZZWxsb3ctMzAwIHJvdW5kZWQtZnVsbCB4bDp3LTE2IHhsOmgtMTYgeGw6cHgtNiB4bDpweS0zLjUgdy0xMiBoLTEwIHB4LTRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgeGw6bXQtMFwiPjE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOnRleHQtMnhsIDJ4bDpsZWFkaW5nLTggZm9udC1ub3JtYWwgeGw6dGV4dC1tZCBtdC0zXCI+XG5cblx0XHRcdFx0XHRcdFx0XHQ8cD5BZGQgdGhpcyBpbiB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aWRlbyBpbiB5b3VyIFlvdVR1YmUgY2hhbm5lbDogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgWW91VHViZSB2aWRlbyBzdWNjZXNzZnVsbHkgd2l0aCB0aGUgQWxieSBicm93c2VyIGV4dGVuc2lvbjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17WW91dHViZX0gYWx0PVwiY29kZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtZb3V0dWJlTW9iaWxlfSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwic2hhZG93LTJ4bCAgYmxvY2sgbGc6aGlkZGVuIG10LTRcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB4bDpncmlkIHhsOmdyaWQtY29scy0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC0xMCBwYi0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDpzcGFjZS15LTYgc3BhY2UteS0yIHhsOm1sLTE3IG9yZGVyLWxhc3RcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwieGw6dGV4dC00eGwgeGw6bGVhZGluZy0xMCBmb250LWJsYWNrIGxnOnRleHQtMnhsIHRleHQteGxcIj5CaXRjb2luIFRWPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ4bDp0ZXh0LTN4bCBmb250LWJvbGQgbGc6dGV4dC14bCB0ZXh0LWxnXCI+SG93IHRvIHJlY2VpdmUgY29udHJpYnV0aW9ucyBvbiBCaXRjb2luVFY8L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktOVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIjJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LTJ4bCB4bDpsZWFkaW5nLTkgZm9udC1ibGFjayBiZy1hbGJ5WWVsbG93LTMwMCByb3VuZGVkLWZ1bGwgeGw6dy0xNiB4bDpoLTE2IHhsOnB4LTYgeGw6cHktMy41IHctMTIgaC0xMCBweC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4xPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ4bDp0ZXh0LTJ4bCAyeGw6bGVhZGluZy04IGZvbnQtbm9ybWFsIHhsOnRleHQtbWQgbXQtM1wiPlxuXG5cdFx0XHRcdFx0XHRcdFx0PHA+QWRkIHRoaXMgaW4gdGhlIGRlc2NyaXB0aW9uIG9mIGEgdmlkZW8gaW4geW91ciBCaXRjb2luVFYgY2hhbm5lbDogPGI+XHUyNkExeW91QGxpZ2h0bmluZy5hZGRyZXNzPC9iPlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIyeGw6dGV4dC0zeGwgeGw6dGV4dC0yeGwgeGw6bGVhZGluZy05IGZvbnQtYmxhY2sgYmctYWxieVllbGxvdy0zMDAgcm91bmRlZC1mdWxsIHhsOnctMTYgeGw6aC0xNiB4bDpweC02IHhsOnB5LTMuNSB3LTEyIGgtMTAgcHgtMy41XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHhsOm10LTBcIj4yPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwieGw6dGV4dC0yeGwgMnhsOmxlYWRpbmctOCBmb250LW5vcm1hbCB4bDp0ZXh0LW1kIG10LTNcIj5WZXJpZnkgaWYgeW91IGVuaGFuY2VkIHlvdXIgQml0Y29pblRWIHZpZGVvIHN1Y2Nlc3NmdWxseSB3aXRoIHRoZSBBbGJ5IGJyb3dzZXIgZXh0ZW5zaW9uPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtCaXRjb2lufSBhbHQ9XCJjb2RlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XG5cdFx0XHRcdFx0PGltZyBzcmM9e0JpdGNvaW5Nb2JpbGV9IGFsdD1cImNvZGVcIiBjbGFzc05hbWU9XCJzaGFkb3ctMnhsICBibG9jayBsZzpoaWRkZW4gbXQtNFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiZnVuY3Rpb24gV2FsbGV0KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiICBweS1bOHJlbV0gcmVsYXRpdmUgYmctZGlhbW9uZExheWVyIGJnLXJlcGVhdCBiZy1hbGJ5Q29sZEdyYXktODAwIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiB3LVs5MS40NiVdIHRleHQtY2VudGVyIG1kOnctWzU1LjYyNSVdIG1heC13LVs1MC4wNjNyZW1dIG14LWF1dG8gZm9udC1wcmltYXJ5XCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LTV4bCB0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtYWxieUNvbGRHcmF5LTI1XCI+XG4gICAgICAgICAgVGhpcyBuZXcgd2F5IG9mIG1vbmV0aXphdGlvbiBpcyBicm91Z2h0IHRvIHlvdSBieSBBbGJ5XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1kOnRleHQtMnhsIHRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWFsYnlDb2xkR3JheS0yNSBwdC00XCI+XG4gICAgICAgICAgQWxieSBpcyBhIGJyb3dzZXIgZXh0ZW5zaW9uIGZvciB0aGUgQml0Y29pbiBMaWdodG5pbmcgTmV0d29yay4gWW91IGNhbiBjb25uZWN0IHlvdXIgb3duIExpZ2h0bmluZyB3YWxsZXQgb3IgdXNlIEFsYnlcdTIwMTlzIHdhbGxldCBhbmQgc3RhcnQgdHJhbnNhY3RpbmcgaW4gQml0Y29pbiB3aXRoIGVhc2UuXG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1hbGJ5WWVsbG93LTMwMCB0ZXh0LWFsYnlDb2xkR3JheS04MDAgdGV4dC1iYXNlIGxnOnRleHQtbGcgZm9udC1tZWRpdW0gcHktMyBsZzpweS00IHB4LTQgbGc6cHgtOCByb3VuZGVkLVsxLjg3NXJlbV0gbXQtNFwiPlxuICAgICAgICAgIFRyeSBpdCBub3dcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FB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
