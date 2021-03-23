export function condition(condition) {
    switch (condition) {
        case 'storm':
            return icon = {
                name: 'thunderstorm-outline',
                color: '#607D8B',
                json: require('../assets/animations/storm.json')
            };
            break;
        case 'snow':
            return icon = {
                name: 'snow-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloud.json')
            };
            break;
        case 'hail':
            return icon = {
                name: 'rainy-outline',
                color: '#607D8B',
                json: '../assets/animations/cloud.json'
            };
            break;
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloud.json')
            };
            break;
        case 'fog':
            return icon = {
                name: 'rainy-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloud.json')
            };
            break;
        case 'clear_day':
            return icon = {
                name: 'sunny-outline',
                color: '#607D8B',
                json: require('../assets/animations/clear_day.json')
            };
            break;
        case 'clear_night':
            return icon = {
                name: 'moon-outline',
                color: '#607D8B',
                json: require('../assets/animations/clear_night.json')
            };
            break;
        case 'cloud':
            return icon = {
                name: 'cloud-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloud.json')
            };
            break;
        case 'cloudly_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloudly_day.json')
            };
            break;
        case 'cloudly_night':
            return icon = {
                name: 'cloud-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloudly_night.json')
            };
            break;
        case 'none_day':
            return icon = {
                name: 'rainy-outline',
                color: '#607D8B',
                json: require('../assets/animations/cloud.json')
            };
            break;
        case 'none_night':
            return icon = {
                name: 'rainy-outline',
                color: '#607D8B',
                json: require('../assets/animations/clear_day.json')
            };
            break;
        default:
            return icon = {
                name: 'sunny-outline',
                color: '#607D8B',
                json: require('../assets/animations/clear_day.json')
            };
    }
}