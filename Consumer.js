const kafka = require('kafka-node');
const client = new kafka.KafkaClient('localhost:2181');

class Consumer {
  constructor(topic, partition = 0) {
    const consumer = new kafka.Consumer(client, [
      { topic: topic, partition: partition },
    ]);

    consumer.on('message', console.log);
  }
}

module.exports = Consumer;
