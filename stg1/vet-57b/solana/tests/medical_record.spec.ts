import { TestingContext } from "./helpers/testing_context.helper";

describe('Medical record', () => {

  /** The testing context for the program */
  let testingContext: TestingContext;

  beforeEach(async () => {
    // Create a new testing context
    testingContext = new TestingContext();
    // Initialize the testing context
    await testingContext.initialize();
  });

  describe('New pet registration', () => {
    it('Registers a new pet', async () => {});
  });
});
