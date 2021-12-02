(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__2XHcd",inputFilter:"Filter_inputFilter__3w4Db",title:"Filter_title__N1PZ7"}},15:function(t,e,n){t.exports={list:"PhonebookItem_list__3tUMo",button:"PhonebookItem_button__23Md4"}},17:function(t,e,n){t.exports={container:"Container_container__3y6L-"}},27:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(8),o=n.n(a),i=(n(27),n(17)),s=n.n(i),l=n(1),u=function(t){var e=t.children;return Object(l.jsx)("div",{className:s.a.container,children:e})},b=n(16),j=n(39),d=n(6),m=n.n(d),f=n(4),O=n(3),h={addContact:Object(O.b)("contacts/addContact",(function(t){return{payload:{id:Object(j.a)(),name:t.name,number:t.number}}})),deleteContact:Object(O.b)("contacts/DelContact"),changeFilter:Object(O.b)("filter/change")};var p=Object(f.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onFormSubmit:function(e){return t(h.addContact(e))}}}))((function(t){var e=t.onFormSubmit,n=Object(c.useState)(""),r=Object(b.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(""),s=Object(b.a)(i,2),u=s[0],d=s[1],f=Object(c.useRef)(Object(j.a)()),O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":d(c);break;default:return}},h=function(){o(""),d("")};return Object(l.jsx)("div",{className:m.a.Container,children:Object(l.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),e({name:a,number:u,contactId:f}),h()},children:[Object(l.jsxs)("label",{className:m.a.formItem,children:["Name"," ",Object(l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:O})]}),Object(l.jsxs)("label",{className:m.a.formItem,children:["Number"," ",Object(l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:O})]}),Object(l.jsx)("button",{type:"submit",className:m.a.button,children:"Add contact"})]})})})),x=n(15),_=n.n(x),C=function(t){var e=t.id,n=t.name,c=t.number,r=t.onDeleteList;return Object(l.jsxs)("li",{className:_.a.list,children:[Object(l.jsxs)("p",{children:[n,":"]}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("button",{className:_.a.button,onClick:function(){return r(e)},children:"Delete"})]},e)},v=function(t){var e=function(t){return t.contacts.items}(t),n=function(t){return t.contacts.filter}(t),c=n.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(c)}))},g=function(t){var e=t.title,n=Object(f.d)(v),c=Object(f.c)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e}),Object(l.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(l.jsx)(C,{name:n,number:r,onDeleteList:function(){return function(t){return c(h.deleteContact(t))}(e)}},e)}))})]})},N=n(11),F=n.n(N),k=Object(f.b)((function(t){return{value:t.filter}}),(function(t){return{onChangeFilter:function(e){return t(h.changeFilter(e.target.value))}}}))((function(t){var e=t.onChangeFilter;return Object(l.jsxs)("label",{className:F.a.filter,children:[Object(l.jsx)("p",{className:F.a.title,children:"Find contacts by name "}),Object(l.jsx)("input",{className:F.a.inputFilter,type:"text",name:"filter",onChange:e})]})}));function y(){return Object(l.jsxs)(u,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(p,{}),Object(l.jsx)(k,{}),Object(l.jsx)(g,{title:"Contacts"})]})}var L,w=n(10),A=n(2),I=n(19),S=n.n(I),D=n(12),z=Object(O.c)([],(L={},Object(D.a)(L,h.addContact,(function(t,e){var n=e.payload;return[].concat(Object(w.a)(t),[n])})),Object(D.a)(L,h.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),J=Object(O.c)("",Object(D.a)({},h.changeFilter,(function(t,e){return e.payload}))),M=Object(A.b)({items:z,filter:J}),P=n(5),Z=n(20),q=n.n(Z),B=[].concat(Object(w.a)(Object(O.d)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),[S.a]),E={key:"contacts",storage:q.a,blacklist:["filter"]},G=Object(A.b)({contacts:Object(P.g)(E,M)}),H=Object(O.a)({reducer:G,middleware:B,devTools:!1}),R={store:H,persistor:Object(P.h)(H)},T=n(21);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f.a,{store:R.store,children:Object(l.jsx)(T.a,{loading:null,persistor:R.persistor,children:Object(l.jsx)(y,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={Container:"ContactList_Container__1LJ-Y",form:"ContactList_form__27r8a",formItem:"ContactList_formItem__lNxfi",button:"ContactList_button__1SANG"}}},[[38,1,2]]]);
//# sourceMappingURL=main.f8d2888a.chunk.js.map