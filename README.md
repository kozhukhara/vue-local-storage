# LocalStorage Composable for Vue 3
A Vue 3 Composition API composable for easily interacting with Local Storage, providing reactive and typed access to local storage values.

## Features
- **Reactive Local Storage Access**: Automatically updates your Vue component when the local storage value changes.
- **TypeScript Support**: Fully typed for excellent development experience in TypeScript projects.
- **Simple API**: Easy to use with minimal setup.

## Installation
```bash
npm install git://github.com/kozhukhara/vue-local-storage.git
# or
yarn add git://github.com/kozhukhara/vue-local-storage.git
```

## Usage
Import `useLocalStorage` in your Vue component and use it to read from or write to local storage reactively.

```vue
<template>
  <div>
    <input v-model="userInput" placeholder="Type something..." />
    <p>{{ userInput }}</p>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from 'vue-local-storage';

const userInput = useLocalStorage('myKey', 'defaultValue');
</script>
```

## API
### `useLocalStorage(key: string, defaultValue: any)`
- `key`: Local Storage key to read from or write to.
- `defaultValue`: Initial value to use if the key is not already in Local Storage.

## TypeScript Support
This package is built with TypeScript, providing type definitions out of the box. Ensure your project is configured to use TypeScript for the best development experience.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any features, fixes, or improvements.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/another-feature`
3. Commit your changes: `git commit -am 'feat: use x for y'`
4. Push to the branch: `git push origin feat/another-feature`
5. Open a Pull Request

> See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for commit naming rules.

## License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.