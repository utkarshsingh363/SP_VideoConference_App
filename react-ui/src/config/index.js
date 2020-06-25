import config from 'react-global-configuration';
import dev from './dev';
import prod from './prod'

if(window.location.hostname==='localhost'){
    config.set(prod)
}else{
    config.set(prod)
}