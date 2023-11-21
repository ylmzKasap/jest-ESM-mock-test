import moduleToMock from './module_to_mock.js';

export default async (req, res) => {
  const { message } = req.body;

  const mockWorks = moduleToMock();
  if (!mockWorks) {
    return res.status(400).json({message: 'Mock did not work'});
  }

  return res.status(200).json({message: `Mock works: ${message}`});
}