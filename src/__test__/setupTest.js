import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'


configure({ adapter: new Adapter() })
global.fetch = require('jest-fetch-mock');