## Tally
Tally displays a table of olympic medal counts sorted by country. This project explores the use of [React hooks](https://reactjs.org/docs/hooks-intro.html) to build a simple React app.
### Running
```
  npm install
  npm start
```
### Fun Bugs Encountered
#### Fetching data turned into an infinite loop
```
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
      const COUNTRIES_URL = "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";
      fetch(COUNTRIES_URL).then(function(response) {
          if(response.ok) {
              return response.json();
          }
          throw new Error('Network response was not ok.');
      }).then(function(countries_data) {
          setCountries(countries_data);
      }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
      });
    return;
  });
```
The docs have a solution: https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

Quoting it: "You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:"
```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

Later on: "If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the inputs array always works. While passing [] is closer to the familiar componentDidMount and componentWillUnmount mental model, we suggest not making it a habit because it often leads to bugs, as discussed above. Don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem."

Doing something similar fixed it up to only fetch once:

```
    useEffect(()=>{
        const COUNTRIES_URL = "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";
        fetch(COUNTRIES_URL).then(function(response) {
        ...
        ...
    }, []);
```


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
