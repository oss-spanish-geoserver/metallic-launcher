import assert from 'assert'
import { RunnerInterface } from 'metallic-interfaces'
import MetricsFactory from 'metallic-metrics'
import LoggerFactory from 'metallic-logger'
import LeaderFactory from '../../../../src/cluster/leader'

describe('leader-factory', function () {
  it('.create() should return a Runner instance', function () {
    const logger = LoggerFactory.create({ options: { enabled: false } })
    const metrics = MetricsFactory.create({ logger, options: { interval: 0 } })

    const leader = LeaderFactory.create({ metrics, logger })

    assert.ok(leader instanceof RunnerInterface)
  })
})
