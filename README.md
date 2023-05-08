# nokori JS Framework Examples

Example projects that use [nokori](https://nokori.com?utm_source=github&utm_medium=js-framework-examples&utm_campaign=home) with various frontend frameworks.

nokori works with every JS/TS frontend framework.

This repository contains examples for many of today's most popular frontend frameworks.

## nokori Docs

You can always reference the [nokori Developer Docs](https://docs.nokori.com/?utm_source=github&utm_medium=js-framework-examples&utm_campaign=home) for more information.

## Nokori Powered Components

nokori makes it near effortless to add any database or API operation to your components without servers, APIs, or infrastructure to manage.

Because nokori is cloud-native, queries are managed centrally as Special Purpose Cloud Functions in the nokori UI. This uniquely allows you to keep your data operations close to your template logic without sacrificing code maintainability or reusability.

### Component Example

```js
import nokori from '@nokori/js-sdk'
const nk = nokori('api_key')

async function create(formData: FormData){
 const { data, error } = await nk.query.execute({
    queryId: 'nk.q.-ddqHfqeZNihbChcAbf', //Global Cloud Query ID
      context: {
        name: formDate.get('name')
      } 
    }
  )
}

export default function FormComponent() {
  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Available Examples

- [Next.js](./nextjs)
- [React](./react)
- [Svelte](./svelte)
- [Vue](./vue)

## .env Files

Annoyingly, different frameworks utilize .env files in their own way, often with non-obvious documentation.

For these examples, you must set your nokori API key in the .env file in this manner:

### Next.js

```bash
NOKORI_API_KEY={{YOUR_API_KEY}}
```

### React

```bash
REACT_APP_NOKORI_API_KEY={{YOUR_API_KEY}}
```

### Svelte

```bash
VITE_NOKORI_API_KEY={{YOUR_API_KEY}}
```

### Vue

```bash
VITE_NOKORI_API_KEY={{YOUR_API_KEY}}
```
