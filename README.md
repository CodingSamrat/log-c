## switch-log

### Installation
Open terminal and copy-past the command 🤝
``` bash
npm i switch-log
```



### Usage
``` javascript
import Log from 'switch-log'

// Create a log instance
const log = new Log();


// Use the logger
log.info('This is an info message')
log.warn('This is a warning message')
log.error('This is an error message')
```


</br>
</br>



### Disable Log
If you want to disable logging you can pass options to `Log`. 


``` javascript
import Log from 'switch-log'

// Create a log instance with options
const log = new Log({
    disabled:true // change condition according to you
});

```


