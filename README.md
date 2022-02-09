# AHT
Auto height &lt;textarea> for ReactJS

Installation:

`npm install @ipatieff/aht`

or

`yarn add @ipatieff/aht`

Usage:

Add import in your component:

`import { AHT } from '@ipatieff/aht'`

Insert in JSX:

```
const App = () => {
    return (<AHT>your text here</AHT>);
}
```

#NOTE:

ATH extends type - `TextareaHTMLAttributes<HTMLTextAreaElement>`, and support props className, style, etc.

#Demo 

1) Clone repo
2) `yarn`
3) `yarn run storybook`

