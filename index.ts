import { Service } from 'builder_hub/server'
import { config } from 'builder_hub/example'

const service = new Service(config)
service.serve()
