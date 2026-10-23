# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Reflection 

### Optional props
For optional props, I used the one which I felt were important and did not use few like avatatUrl by not assigning any value to it. However, to add more features that can be used for future improvements by assignming values to them.

### Considerations for designing component interfaces
When designing the interfaces, the primary goal is to keep it flexible and handle errors properly. Instead of passing individual props for every data value, the component interface was used to accept single data object keeping the code clean.

### Ensuring type safety across components
Using typescript enfoces data safety by defining the data expectations and preventing passing incorrect data types. Additionally, ensures proper handling of booleans.


