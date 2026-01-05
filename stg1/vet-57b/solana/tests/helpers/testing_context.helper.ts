import { AnchorProvider, Provider } from "@coral-xyz/anchor";
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

/**
 * Defines the environment for testing proving helper functions to create and track the program entities.
 */
export class TestingContext {
  /** The Solana provider to send transactions */
  readonly provider: Provider;
  /** The connection to the Solana node */
  readonly connection: Connection;
  /** The default signer of the testing environment to send operations */
  readonly defaultSigner: Keypair;

  constructor() {
    // Create a local provider to send transactions
    this.provider = AnchorProvider.local();
    // Create a connection to the Solana node
    this.connection = this.provider.connection;
    // Create a default signer to send operations
    this.defaultSigner = TestingContext.newKeypair();
  }

  /**
   * Creates a new random Keypair
   * @returns A new random Keypair
   */
  static newKeypair(): Keypair {
    return Keypair.generate();
  }

  /**
   * Initialize the testing environment by funding the default signer.
   */
  async initialize(): Promise<void> {
    // Fund the default signer
    await this.sendAirdrop([this.defaultSigner]);
  }

  /**
   * Send an airdrop to the given accounts
   * @param accounts - The accounts to send the airdrop to
   * @param amount - The amount of SOL to send
   */
  async sendAirdrop(accounts: Keypair[], amount: number = 5): Promise<void> {
    // Iterate over the accounts and send the airdrop
    for (const account of accounts) {
      await this.connection.requestAirdrop(account.publicKey, amount * LAMPORTS_PER_SOL);
    }
  }

  /**
   * Waits for a transaction to be finalized by the validator node.
   * @param signature - The signature of the transaction to wait for
   */
  async waitForTransactions(signatures: string | string[]): Promise<void> {
    // If the signatures is an array, wait for all the transactions to be confirmed
    if (Array.isArray(signatures)) {
      // Wait for all the transactions to be confirmed
      await Promise.all(signatures.map(async (txSignature) => {
        await this.waitForTransactions(txSignature);
      }));
    } else {
      // Get the latest block hash info
      const lastBlockHash = await this.connection.getLatestBlockhash();
      // Wait fot the transaction to be confirmed
      await this.connection.confirmTransaction({
        signature: signatures,
        ...lastBlockHash,
      }, 'confirmed');
    }
  }
}
