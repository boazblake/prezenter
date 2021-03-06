module.exports = {
  presentations: [
    {
      id: 1,
      title: 'Elm App',
    },
    {
      id: 2,
      title: 'OO- patterns and designs',
    },
    {
      id: 3,
      title: 'JS AND OO',
    },
    {
      id: 4,
      title: 'CSS',
    },
  ],
  slides: [
    {
      presentation_id: 1,
      id: 1,
      title: 'takeaways',
      contents:
        '# TAKEAWAYs\n## overall I ![elm-app-heart](https://marcosh.github.io/presentations/2016/10/28/img/elm_heart.png), \n## aside\nhow to start with fp is diff from OO ... need to first think about what you want to create and build the model up first. \n\n# some of the many challanges ...\n1. saving to db\n2. managing state',
      isSelected: false,
      order: 0,
    },
    {
      presentation_id: 1,
      id: 2,
      title: 'SLIDE 9 ELM APP',
      contents:
        '# ELM MESSAGING \n```elm\ntype Msg\n  = EditSlide Slide\n  | AddSlideToShow Slide\n  | InputTitle String\n  | InputContents String\n  | Save\n  | Cancel\n  | DeleteShow ShowSlide\n  | SwitchView String\n  | ToPickSlides\n  | ShowAnotherSlide String\n  | OnInitialLoad ( WebData (List Slide) )\n  | OnSlideSave ( Result Http.Error (List Slide) )\n```\n#  ELM UPDATE  --  changing slides \n```elm\nshowAnotherSlide : String -> Model -> (Model, Cmd Msg)\nshowAnotherSlide direction model =\n  case direction of\n    "+" ->\n      if model.currentSlideId == ( List.length model.showSlides - 1)  then\n        ( model, Cmd.none )\n      else\n        ( { model\n            | currentSlideId = model.currentSlideId + 1\n        }\n        , Cmd.none )\n\n    "-" ->\n      if model.currentSlideId == 0 then\n        ( model, Cmd.none )\n      else\n        ( { model\n            | currentSlideId = model.currentSlideId - 1\n        }, Cmd.none )\n\n    "restart" ->\n        ( { model\n            | currentSlideId = 0\n        } , Cmd.none )\n\n    _ ->\n        ( model, Cmd.none )\n```\n# ELM UPDATE  -- adding a new slide to presentation\n```elm\naddSlideToShow : Model -> Slide -> (Model, Cmd Msg)\naddSlideToShow model slide =\n\n  let\n    showSlideId =\n      model.showSlides\n        |> List.length \n\n    newShowSlide =\n      ShowSlide showSlideId slide.id slide.title slide.contents\n\n    isUnique x xs =\n      List.filter(\\s -> s.slideId == x.slideId) xs\n\n  in\n    if \n      List.isEmpty (model.showSlides |> isUnique newShowSlide )\n    then\n      (\n        { model\n        | showSlides = newShowSlide :: model.showSlides\n        } , Cmd.none )\n\n    else\n      ( model, Cmd.none )\n```\n# ELM VIEW \n```elm\ntitle : Model -> Html Msg\ntitle model =\n  div [ class "hero is-primary is-bold"  ]\n    [ div [ class "hero-body"  ]\n      [ header [class "container"]\n        [ h1 [class "title is-1 is-spaced", style[("text-align", "center")]] [text "PREZENTER"]\n        ]\n      ]\n    ]\n```',
      isSelected: false,
      order: 0,
    },
    {
      presentation_id: 1,
      id: 3,
      title: 'SLIDE 8 app architecture',
      contents:
        '# App architecture\n```elm\n-- MAIN\nmain : Program Never Model Msg\nmain =\n  Html.program\n    { init = (initModel, fetchSlides)\n    , update = update\n    , subscriptions = subscriptions\n    , view = view\n    }\n```\n\n# elm commands\n![elm-commands](http://elmprogramming.com/images/commands/reload-state.png)\n\n# elm commands lifecycle 1\n![elm-command-lifecycle-1](http://elmprogramming.com/images/commands/model-view-update-commands.png)\n\n# elm command lifecycle 2\n![elm-command-lifecylce-2](http://elmprogramming.com/images/commands/elm-runtime-mvu-commands.png)',
      isSelected: false,
      order: 0,
    },
    {
      presentation_id: 1,
      id: 4,
      title: 'SLIDE 7 elm-node interaction',
      contents:
        '# elm - nodejs interaction\n![elm-nodejs-interaction](http://elmprogramming.com/images/elm-architecture/elm-runtime.png)',
      isSelected: false,
      order: 0,
    },
    {
      presentation_id: 1,
      id: 5,
      title: 'SLIDE 6 virtual dom',
      contents:
        '# virtual dom\n![virtual-dom](http://elmprogramming.com/images/virtual-dom/elm-runtime-virtual-dom.png)',
      isSelected: false,
      order: 0,
    },
    {
      presentation_id: 1,
      id: 6,
      title: 'SLIDE 5 elm lifecycle',
      contents:
        '# elm lifecycle\n![elm-lifecycle](http://elmprogramming.com/images/elm-architecture/model-view-update-interaction-1.png)',
      isSelected: false,
      order: 0,
    },
    {
      id: 7,
      presentation_id: 1,
      title: 'SLIDE 2 elm framework',
      contents:
        '# elm framework\n all images courtesy of [Elm Programming](http://elmprogramming.com/)\n\n![elm-framework](http://elmprogramming.com/images/elm-architecture/model-view-update.png)',
      isSelected: false,
      order: 0,
    },
    {
      id: 8,
      title: 'SLIDE 4 elm runtime',
      presentation_id: 1,
      contents:
        '# elm runtime\n![elm-runtime](http://elmprogramming.com/images/elm-intro/elm-dirty-secret.png)',
      isSelected: false,
      order: 0,
    },
    {
      id: 9,
      presentation_id: 1,
      title: 'SLIDE 3 elm overview',
      contents:
        '# elm overview\n![elm](http://elmprogramming.com/images/elm-intro/elm-compiler.png)\n',
      isSelected: false,
      order: 0,
    },
    {
      presentation_id: 1,
      id: 10,
      title: 'SLIDE 1 defining features & tooling',
      contents:
        '# This app was built with\n### `Elm`\n![elm](https://frontendmasters.com/static-assets/workshops/thumbnails/elm.jpg)\n<h1 style="text-align:left;">__&__</h1>\n### `nodejs`\n![nodejs](https://rishabh.io/tech/nodejs/img/nodejs.png)\n\n# NodeJS Tooling\n`yarn : to install dependencies `\n```\n  "dependencies": {\n    "foreman": "2.0.0", // to start up api and client at same time\n    "json-server": "0.9.5" // quick api mock up\n  }\n```\n## Elm-app-create\nscaffold the app\n\n# Elm specific Tooling\n`elm-app install <package>: to install package`\n```\n   "dependencies": {\n    "NoRedInk/elm-decode-pipeline": "3.0.0 <= v < 4.0.0", //json library \n    "elm-lang/core": "5.0.0 <= v < 6.0.0", //core lib for elm\n    "elm-lang/html": "2.0.0 <= v < 3.0.0", //html lib\n    "elm-lang/http": "1.0.0 <= v < 2.0.0", // http lib\n    "evancz/elm-markdown": "3.0.2 <= v < 4.0.0", // markdown lib\n    "krisajenkins/remotedata": "4.3.1 <= v < 5.0.0", // union type for http\n    "surprisetalk/elm-bulma": "5.0.0 <= v < 6.0.0" // css-bulma for simple styling\n  },\n```',
      isSelected: false,
      order: 0,
    },
    {
      title: 'SLIDE _11 DIP',
      contents:
        '__Dependency inversion__\\n===\\n---\\n![IP](https://image.slidesharecdn.com/openclosedprinciplekata-130915060011-phpapp01/95/open-closed-principle-kata-9-638.jpg?cb=1379225200)\\n>High level modules should not depend on low level modules rather both should depend on abstraction.\\n\\n>Abstraction should not depend on concrete details; rather details should depend on abstractions.\\u201d\\n\\nIn JS the __ concern__ of the dependancy inversion principle is to ensure decoupling between components and their depenencies.\\n\\n__Dependency Injection__ is __Not__ related to the principle of dependancy inversion.\\n\\n__DI__ a different aspect of __Inversion of Control__ in which the concern being inverted is \\n__how a component obtains__ its dependencies rather than __who defines__ the interface.\\n\\nin DI dependencies are supplied to a component rather than the component obtaining the dependency by means of creating an instance of the dependency\\n\\nhttp://aspiringcraftsman.com/2012/01/22/solid-javascript-the-dependency-inversion-principle/',
      id: 11,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE _10- ISP',
      contents:
        '__Interface Segregation Principle__\\n===\\n-----\\n![ISP](http://deviq.com/wp-content/uploads/2014/11/InterfaceSegregation.jpg)\\n\\n#### The cohesion of __interfaces within a system__.\\n\\n##### ... JS does not have interfaces ...\\n\\n>#### Clients should not be forced to depend on __methods__ they do not use.\\n\\n__The operation\\u2019s signature__ :\\nEvery operation declared by an object specifies the operation\\u2019s name, the objects it takes as parameters, and the operation\\u2019s return value. \\n\\n__The set of all signatures__ defined by an object\\u2019s operations is called the interface to the object.\\n\\nhttp://aspiringcraftsman.com/2012/01/08/solid-javascript-the-interface-segregation-principle/',
      id: 12,
      isSelected: false,
      order: 1,
      presentation_id: 2,
    },
    {
      title: 'SLIDE _9 - LSP',
      contents:
        'uploads/image/fdb79615dcfbce156440b9d453b7b4d8.jpg)\\n\\n> ### Any extended entity should be able to replace the entity which it is an extension of without modifiyng the  __behavior__ of the application.\\n\\n```\\nif S is a subtype of T, \\nthen objects of type T\\nin a program may be replaced \\nwith objects of type S \\nwithout altering any of the desirable properties of that program```\\n\\n\\n\\n\\n#### \\u201ca violation of LSP is a latent violation of OCP\\u201d.\\n\\n\\nhttp://aspiringcraftsman.com/2011/12/31/solid-javascript-the-liskov-substitution-principle/',
      id: 13,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 8 OCP',
      contents:
        '__Open/closed__\\n==\\n----\\n![ocp](https://image.slidesharecdn.com/openclosedprinciplekata-130915060011-phpapp01/95/open-closed-principle-kata-7-638.jpg?cb=1379225200)\\n\\n>#### Software entities (classes, modules, functions, etc.) should be __open for extension but closed for modification__.\\n\\n#### The __foundation__ for building reusable maintainable code.\\n\\n\\n\\n #### __open for extension:__  reusing an element in different contexts\\n\\n#### __ closed to modification__  the changes do not require a modification in the behaviour of the element.\\n\\n### __Leads to__ \\n* #### Loose coupling\\n* #### improve readability\\n* #### reducing the risk of breaking existing functionality.\\n\\nhttp://aspiringcraftsman.com/2011/12/19/solid-javascript-the-openclosed-principle/',
      id: 14,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 7 SRP',
      contents:
        '__Single Responsibility__\\n===\\n-----\\n![srp](https://cdn-images-1.medium.com/max/839/1*3YaCOImYwSA4XTQS5nF5bQ.png)\\n> ### A class should have __only one reason to change__\\n\\n###  __NOT__ the _same as only do one thing_.\\n\\n![not srp](http://www.dotnetcurry.com/images/software-gardening/srp/single-responsibility-principle.jpg)\\n\\n----\\n### An object should have a __cohesive set of behaviors__, together comprising a single responsibility that, if changed, would require the modification of the object\\u2019s definition. \\n\\n### __cohesion__\\n* #### derives from the functional relatedness of elements in a module.\\n\\n* #### This leads to better/concise tests and improved code reliability\\n \\n### code smells:\\n   * #### large setups for testing,\\n   * #### more than one contextually different piece of code\\n\\nhttp://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/',
      id: 15,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 6 - Princips of OOD',
      contents:
        '__Principles of Object Oriented Design__\\n===\\n---\\n#### Principles are distillation of __patterns__ in nature.\\n#### __ Principles__   constrain our code and helps keep our code simple and bug free.\\n\\n #### __Robert C. Martin__ promoted  11 Principles\\n #### Detailing how to __design (5) and package (6)__ software.\\n  \\n\\n#### Michael Feathers coined the term __SOLID PRINCIPLES__ \\n\\n#### http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod\\n\\n![solid](https://cdn-images-1.medium.com/max/606/1*yO6YGExWLJl5VOUL61xXvQ.jpeg)',
      id: 16,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 5 - GOF',
      contents:
        '### __Patterns__ are __repetitive__ designs;\\n### __simplify__ solutions to common problems.\\n![fractal](https://i.pinimg.com/736x/30/94/61/3094618c00ddbf7c5d4b2558d44ee6b9--golden-ration-fractals-in-nature.jpg)\\n __The__ Gang of Four\\n====\\n-----\\n#### __Design Patterns__: Elements of Reusable Object-Oriented Software \\n##### by _Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides_.\\n----\\n<table>\\n<tr>\\n<th>__Creational patterns (5)__<\\/th>\\n<th>__Structural patterns (7)__<\\/th>\\n<th>__Behavioral patterns (11)__<\\/th>\\n<\\/tr>\\n<tr>\\n<td>Factory method pattern<\\/td>\\n<td>Adapter pattern<\\/td>\\n<td>Chain-of-responsibility pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td>Abstract factory pattern<\\/td>\\n<td>Bridge pattern<\\/td>\\n<td>Command pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td>Singleton pattern<\\/td>\\n<td>Composite pattern<\\/td>\\n<td>Interpreter pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td>Builder pattern<\\/td>\\n<td>Decorator pattern<\\/td>\\n<td>Iterator pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td>Prototype pattern<\\/td>\\n<td>Facade pattern<\\/td>\\n<td>Mediator pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td><\\/td>\\n<td>Flyweight pattern<\\/td>\\n<td>Memento pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td><\\/td>\\n<td>Proxy pattern<\\/td>\\n<td>Observer pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td><\\/td>\\n<td><\\/td>\\n<td>State pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td><\\/td>\\n<td><\\/td>\\n<td>Strategy pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td><\\/td>\\n<td><\\/td>\\n<td>Template method pattern<\\/td>\\n<\\/tr>\\n<tr>\\n<td><\\/td>\\n<td><\\/td>\\n<td>Visitor pattern<\\/td>\\n<\\/tr>\\n<\\/table>\\n',
      id: 17,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 4 - Princ of Design',
      contents:
        '# __PRINCIPLES (...OF DESIGN)__\\n----------------\\n\\n### Occam\'s razor\\n >\\"the simpleset solution is generely the correct one\\"\\n\\n### Hanlon\'s razor:\\n > \\"Never attribute to malice that which is adequately explained by stupidity\\"\\n\\n### __QED__ \\n#### The __less complex__ the system - the more correct it will tend to be.',
      id: 18,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 3 bad design',
      contents:
        '# __On Bad Design__\\n--------------\\n### At the heart of this issue is our __lack__ of a good working _definition_ of \\u201cbad\\u201d design.\\n\\n**Uncle Bob**: http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod\\n\\n### I would say that a system that allowed other metathings to be done in the ordinary course of programming (like __changing__ what inheritance means, or what is an instance) is a bad design.\\n\\n**Alan Kay**  http://lists.squeakfoundation.org/pipermail/squeak-dev/1998-October/017019.html\\n\\n----------------------\\n\\n![martin fowler](https://cdn-images-1.medium.com/max/638/1*00A0l2A6fyNatudL7m5x6Q.jpeg)\\n## A piece of software that __fulfills__ its requirements and yet __exhibits__ any or all of the following three traits has a bad design.\\n\\n### __Rigidity__\\n#### It is hard to change. (because every change affects too many other parts of the system.)\\n### __Fragility__\\n#### When you make a change, unexpected parts of the system break.\\n### __Immobility__\\n#### It is hard to reuse in another application. (because it cannot be disentangled from the current application)',
      id: 19,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 2 good design',
      contents:
        "# __On Good Design__\\n--------------\\n# The __key__ in making great and growable systems is  much more to design how its modules __communicate__ rather than what their internal properties and behaviors should be. \\n\\n**Alan Kay**\\n http://lists.squeakfoundation.org/pipermail/squeak-dev/1998-October/017019.html\\n\\n!['communication'](http://www.jot.fm/issues/issue_2004_04/article9/images/fig1.gif)",
      id: 20,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 01 What?',
      contents:
        '# __What goes wrong with software?__\\n-----------------------------\\n\\n>### __Efficient__ code organization is about Dependency Management.\\n***Uncle Bob\\n\\n### __Most__ software engineers don\\u2019t set out to create \\u201cbad designs\\u201d.\\n\\n### Yet __most__ software eventually degrades to the point where someone will declare the design to be unsound.\\n\\n### __Why__ does this happen?\\n\\n### __Was__ the design poor to begin with, or did the design actually degrade like a piece of rotten meat?\\n\\n**Uncle Bob** http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod\\n![](http://2017.agilesummit.gr/wp-content/uploads/2017/04/UncleBob-300x300.jpg)',
      id: 21,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE _11 DIP',
      contents:
        '__Dependency inversion__\\n===\\n---\\n![IP](https://image.slidesharecdn.com/openclosedprinciplekata-130915060011-phpapp01/95/open-closed-principle-kata-9-638.jpg?cb=1379225200)\\n>High level modules should not depend on low level modules rather both should depend on abstraction.\\n\\n>Abstraction should not depend on concrete details; rather details should depend on abstractions.\\u201d\\n\\nIn JS the __ concern__ of the dependancy inversion principle is to ensure decoupling between components and their depenencies.\\n\\n__Dependency Injection__ is __Not__ related to the principle of dependancy inversion.\\n\\n__DI__ a different aspect of __Inversion of Control__ in which the concern being inverted is \\n__how a component obtains__ its dependencies rather than __who defines__ the interface.\\n\\nin DI dependencies are supplied to a component rather than the component obtaining the dependency by means of creating an instance of the dependency\\n\\nhttp://aspiringcraftsman.com/2012/01/22/solid-javascript-the-dependency-inversion-principle/',
      id: 22,
      isSelected: false,
      order: 0,
      presentation_id: 2,
    },
    {
      title: 'SLIDE 3B',
      contents:
        'WHY SO MUCH CONFUSION ?\\n===\\n\\n![kyle simpson](https://images.hanselminutes.com/images/500.jpg)\\n**Kyle Simpson**\\n>  We have spent the better part of 19 years since JS was invented **pretending** that its internal mechanisms are **class based** so we spent all our time trying to syntactictly sugar-coat it instead of realizing that JS internal mechanisms are **linkages not copies**.\\n\\n  https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m4&clip=9&mode=live\\n',
      id: 23,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 0',
      contents:
        '# Everyone hates JavaScript \\n Q: WTF is This?? (what/when)\\n\\nA:** You dont know JS**\\n\\n![kyle simpson](https://images.hanselminutes.com/images/500.jpg)\\n**Kyle Simpson**\\n>JS has been plagued since the beginning with **misunderstanding** and **awkwardness** around its \\"prototypal inheritance\\" system, mostly due to the fact that **\\"inheritance\\"** isn\'t how JS works. \\n',
      id: 24,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 2a',
      contents:
        "## Brief History of Object Orientated Programing\\n\\n* began ~ 60s\\n* Graphics and user interfaces (sketchpad by Ivan Sutherland)\\n<iframe src='https://gfycat.com/ifr/BraveTastyFirebelliedtoad' frameborder='0' scrolling='no' allowfullscreen width='640' height='480'><\\/iframe>\\n\\n  - pattern matching (reg exp)\\n  - creation of Simula Programing langaguge by **Ole-Johan Dahl** and **Kristen Nygaard**\\n     - introduced *objects, classes, inheritance, subclasses, virtual procedures, coroutines, discrete event simulation, and features of garbage collection*.\\n     - helped inspire the **actor model of concurrent computation** (messaging orientated programming)\\ninspiriation for the development of\\n **Smalltalk** which was the **progenitor** for most of the other object-oriented programming languages we know today.",
      id: 25,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'Message Oriented Programming',
      contents:
        '![](https://www.pop-addiction.com/wp-content/uploads/2018/06/gremlins1.jpg)\\nMessage-Oriented Programming\\n-----------------------------\\nWe use abstractions when we program.\\nThe types of abstractions we use generally fall under different programming methodologies.\\n\\nIn object-oriented programming\\n  --> we use objects as the core abstraction along with attributes, methods, variables and parameters (to name a few).\\nIn functional programming\\n  --> the core abstractions are functions along with parameters and variables (to name a few).\\nIn message-oriented programming (not to be confused with messaging systems and frameworks)\\n  --> Messages and properties are the only abstractions.\\n  --> There are no methods, functions, parameters, variables and so on.\\n  --> A property of a message contains a single message or a composition of messages.\\n  --> A composition of messages is a data structure.\\nThis means that MOP programs are data structures and, as such,\\n  --> can be manipulated just like you would any data structure.\\n  --> Want to duplicate and run part of a program in it\\u2019s own thread?\\n      --> Just copy the program from that point, as you would any data structure, and run it.\\n  --> Want to store part of your program?\\n    --> Just point at any part of your program and save it as you would any data structure.\\n\\n***http://blog.interfacevision.com/design/design-mop-and-javascript/\\n\\n-> actor model in JS: https://monades.roperzh.com/get-to-know-the-actor-model/\\n\\n-> reactive manifesto (https://www.reactivemanifesto.org/)\\n',
      id: 26,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 5',
      contents:
        'HOW TO CREATE OBJECTS IN JS?\n![objects in js](http://imagizer.imageshack.us/a/img911/5519/fxn2D3.png)\n###New Constructor Fn:1. Brand new object2. Object gets linked to its prototype 3. Context gets set to this 4. Returns this Thanks to **Doug Crockford** (JavaScript the good parts, monads and gonads) we have built in to ES5 **Object.create** does the first 2 things that the new constructor does:. create a brand new object, and 2. links it to its prototype \\"Under the hood\\" Object.create does this: where `o` is the object we wish to delegate to```function object(o) {  function F() {}  F.prototype = o;  return new F();};```',
      id: 27,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 4',
      contents:
        'Classical Inheritance VS Prototypical Delegation\\n=====\\n\\n\\n> ### Prototypal delegation is actually the Behavioural Delegation Pattern\\n\\n![delegation vs inheritance](https://cdn-images-1.medium.com/max/1600/1*UZKbYsRuM1OVW3__aZdPdw.png)\\n\\n* **Prototype-delegation** languages uses generalized objects, which can be **cloned** from another object, **extended** and method must be shadowed as a link to the original object still remains.\\n* **Class-based** paradigm langauaged, uses generalized **Classes** which are **extended** when used by another **class**, method names are kept the same (for extensability) but **object instances** have no connection to the  **class**.\\n\\n\\n<table>\\n    <thead>\\n      <th><\\/th>\\n      <th>PROTOTYPICAL DELEGATION<\\/th>\\n      <th>CLASSICAL INHERITANCE<\\/th>\\n    <\\/thead>\\n    <tbody>\\n    <tr>\\n      <td>ABSTRACTIONS<\\/td>\\n      <td>object <- object<\\/td>\\n      <td>classes -> objects<\\/td>\\n    <\\/tr>\\n    <tr>\\n      <td>Differences In Relations<\\/td>\\n      <td>var Human = {} var man = Object.create(human) var Tom = Object.crate(man)<\\/td>\\n      <td>Class Human = {} Class Man extends Human = {} Tom extends new Man()<\\/td>\\n    <\\/tr>\\n    <tr>\\n      <td><\\/td>\\n      <td>Facory Functions - allow for seperation of creation and instantiaion<\\/td>\\n      <td>Tight Coupling -> refactoring ripples -> The fragile base class problem-> Inflexible hierarchy problem -> gorilla/banana-> viscosity DRY etc-> duplication by necessity problem-> have to create and instantiate at same time-> have to force-shadow which leads to confusing this ref.<\\/td>\\n    <\\/tr>\\n    <\\/tbody>\\n<\\/table>\\n\\n**Based On**: comes from class orientated program thinking such as C# where a class is like a blueprint and you get an unrelated object from that class\\nIn Js a constructor function creates an object that is **linked to** the **constructor function**s prototype and are not **based on** the contstructors prototye\\n\\n\\n### **TLDR;**\\n* #### B.Eich (js inventor) works at Netscape.\\n* #### Netscape management jump on Java popularity bandwagon.\\n* #### JS is billed as Class-ical inheritance program langaguge.\\n<br/>\\n##### 1. in JS Objects are not  **based on** their constructor prototypes.\\n##### 2. Objects are **linked to** their constructor prototype.\\n##### 3. Object properties/methods **shadow prototypes**',
      id: 28,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 3',
      contents:
        '\\n\\nRebuttels from OO commmunity\\n===\\n**Junade Ali, **Mastering PHP Design Patterns:\\n>Object-oriented programming is more than just classes and objects;\\n\\n>it\'s a whole programming paradigm based around data structures that contain data fields and methods. i.e. objects.\\n> It is essential to understand that just using classes to organize a bunch of unrelated methods together is not object orientation.\\n\\n**Douglas Crockford**:\\n> You make prototype objects, and then \\u2026 make new instances of them.\\nObjects are mutable in JavaScript, so we can augment the new instances, giving them new fields and methods. These can then act as prototypes for even newer objects.\\n\\n> We don\'t need classes to make lots of similar objects\\u2026 Objects inherit from objects.\\n    What could be more object oriented than that?\\"\\n\\n**Alan Kay**:\\n>I\'m sorry that I long ago coined the term \\"objects\\" for this topic because it gets many people to focus on the **lesser idea {of objects}**  when the big idea is **messaging.**\\n\\n>OOP to me means:\\n1. Communicating by messages,\\n2. local retention and protection and hiding of state-process, and \\n3. extreme late-binding of all things. \\n\\nhttp://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en\\n\\n```\\nobj {}\\n      -> have a notion of this\\n      -> data would be perfectly encapsulate as attributes\\n      -> communicate with messages to other objects using public methods.\\n```',
      id: 29,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 2b',
      contents:
        'Criticisms of OOP\\n===\\n**Luca Cardelli** has claimed that:\\n  > * OOP code is \\"intrinsically less efficient\\" than procedural code,\\n*  that OOP can take longer to compile, and\\n* that OOP languages have \\"extremely poor modularity properties with respect to class extension and modification\\",\\n* and tend to be extremely complex.\\n\\n**Joe Armstrong**, the principal inventor of Erlang:\\n>The problem with object-oriented languages {sic javascript } is they\'ve got all this implicit\\n   environment that they carry around with them.\\n   You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.',
      id: 30,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'SLIDE 2b',
      contents:
        'Criticisms of OOP\\n===\\n**Luca Cardelli** has claimed that:\\n  > * OOP code is \\"intrinsically less efficient\\" than procedural code,\\n*  that OOP can take longer to compile, and\\n* that OOP languages have \\"extremely poor modularity properties with respect to class extension and modification\\",\\n* and tend to be extremely complex.\\n\\n**Joe Armstrong**, the principal inventor of Erlang:\\n>The problem with object-oriented languages {sic javascript } is they\'ve got all this implicit\\n   environment that they carry around with them.\\n   You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.',
      id: 31,
      isSelected: false,
      order: 0,
      presentation_id: 3,
    },
    {
      title: 'Intro',
      contents: '1',
      id: 32,
      isSelected: false,
      order: 0,
      presentation_id: 4,
    },
  ],
}
