(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{151:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"upgrading-0-7-series"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-7-series","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading 0.7 Series")]),e._v(" "),t("p",[e._v("This documentation covers the process for upgrading within the "),t("code",[e._v("0.7.X")]),e._v(" series of releases. This means upgrading from\n— for example — "),t("code",[e._v("0.7.3")]),e._v(" to "),t("code",[e._v("0.7.11")]),e._v(". "),t("strong",[e._v("Do not use this guide for upgrading from "),t("code",[e._v("0.6")]),e._v(" or upgrading to "),t("code",[e._v("0.8")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"fetch-updated-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-updated-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Fetch Updated Files")]),e._v(" "),t("p",[e._v("The first step in the update process is to download the new panel files from Github. The command below will download\nthe release archive for the most recent version of Pterodactyl and save it in the current directory. Now is a good time\nto ensure that you're in the "),t("code",[e._v("/var/www/pterodactyl")]),e._v(" directory as the command below will automatically unpack the archive\ninto your current folder.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/pterodactyl/panel/releases/download/v0.7.11/panel.tar.gz "),t("span",{attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{attrs:{class:"token function"}},[e._v("tar")]),e._v(" --strip-components"),t("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("1 -xzv\n")])])]),t("p",[e._v("Once all of the files are downloaded we need to set the correct permissions on the cache and storage directories to avoid\nany webserver related errors.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R 755 storage/* bootstrap/cache\n")])])]),t("h2",{attrs:{id:"update-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),t("p",[e._v("After you've downloaded all of the new files you will need to upgrade the core components of the panel. To do this,\nsimply run the commands below and follow any prompts.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("composer "),t("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev --optimize-autoloader\n")])])]),t("h2",{attrs:{id:"clear-compiled-template-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-compiled-template-cache","aria-hidden":"true"}},[e._v("#")]),e._v(" Clear Compiled Template Cache")]),e._v(" "),t("p",[e._v("You'll also want to clear the compiled template cache to ensure that new and modified templates show up correctly for\nusers.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan view:clear\n")])])]),t("h2",{attrs:{id:"database-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-updates","aria-hidden":"true"}},[e._v("#")]),e._v(" Database Updates")]),e._v(" "),t("p",[e._v("You'll also need to update your database schema for the newest version of Pterodactyl. Running the two commands below\nwill update the schema and ensure the default eggs we ship are up to date (and add any new ones we might have). Just\nremember, "),t("em",[e._v("never edit core eggs we ship")]),e._v("! They will be overwritten by this update process.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan migrate --force\nphp artisan db:seed --force\n")])])]),t("h2",{attrs:{id:"set-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Set Permissions")]),e._v(" "),t("p",[e._v("The last step is to set the proper owner of the files to be the user that runs your webserver. In most cases this\nis "),t("code",[e._v("www-data")]),e._v(" but can vary from system to system — sometimes being "),t("code",[e._v("nginx")]),e._v(", "),t("code",[e._v("apache")]),e._v(", or even "),t("code",[e._v("nobody")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[e._v("# If using NGINX or Apache (not on CentOS):")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R www-data:www-data * \n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# If using NGINX on CentOS:")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R nginx:nginx *\n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# If using Apache on CentOS")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R apache:apache *\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);