Guidelines are recommended but not mandatory.


### Front guidelines ###
Recommended folder and file structure :
<pre>
.
├── assets
│   ├── fonts
│   ├── icons
│   └── imgs
└── src
    ├── app.js
    ├── environments.js
    ├── components
    │   ├── forms
    │   │   ├── button.component.tsx
    │   │   ├── checkbox.form.tsx
    │   │   ├── forms.utils.tsx
    │   │   ├── input.form.tsx
    │   │   ├── text.input.tsx
    │   │   └── textarea.form.tsx
    │   ├── navbar
    │   │   ├── components
    │   │   │   └── button.component.js
    │   │   └── navbar.component.js
    │   └── style
    │       └── text.component.tsx
    ├── models
    │   └── user.model.tsx
    ├── pages
    │   ├── auth
    │   │   ├── auth.styled.tsx
    │   │   ├── signin.screen.tsx
    │   │   └── signup.screen.tsx
    │   ├── pages.navigation.js
    │   └── tabs
    │       ├── account
    │       │   ├── components
    │       │   │   ├── card-user.tsx
    │       │   │   └── hotel-card.component.tsx
    │       │   └── home.screen.tsx
    │       ├── signin
    │       ├── home
    │       └── signout
    ├── services
    │   ├── auth.service.tsx
    │   ├── services.util.tsx
    │   └── user.service.tsx
    ├── store
    │   ├── configure.store.tsx
    │   └── reducers
    │       ├── auth.slice.tsx
    │       └── user.slice.tsx
    ├── themes
    │   ├── color.theme.ts
    │   ├── font.theme.ts
    │   └── responsive.theme.ts
    └── utils
        ├── animations
        ├── date.util.tsx
        ├── geolocalisation.util.tsx
        └── regex.util.tsx
</pre>

**Naming**

All files have a suffix which defines their typology. <br/>
The suffix makes it easier to read when browsing files and when viewing them in tab mode in your IDE.
 
File type:
* component
* reducer
* navigator
* service
* form
* modal
* screen
* enum
* util
* model
* hook
* styled
* ...


### Back guidelines ###


NestJs is fully inspired from Angular. <br/>
If you want more guidelines (for the naming...) here is the [original documentation](https://angular.io/guide/styleguide).

Recommended folder and file structure :
<pre>
.
└── src
    ├── app.controller.ts
    ├── app.js
    ├── app.module.ts
    ├── app.service.ts
    ├── environments
    ├── api
    │   ├── auth
    │   │   ├── auth.controlleer.ts
    │   │   ├── auth.module.ts
    │   │   ├── auth.servicee.ts
    │   │   ├── dto
    │   │   ├── entities
    │   │   └── interfaces
    │   └── users
    │       ├── dto
    │       ├── entities
    │       ├── interfaces
    │       ├── users.controller.ts
    │       └── users.module.ts
    └── shared
        ├── config
        ├── decorators
        ├── footer
        └── guards
</pre>
