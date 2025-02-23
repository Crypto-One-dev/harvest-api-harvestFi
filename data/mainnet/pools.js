const { CHAINS_ID, TRADING_APY_TYPES, POOL_TYPES } = require('../constants')
const addresses = require('./addresses.json')

const strat30PercentFactor = '0.7'

module.exports = [
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'balancer_OHM_DAI',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_OHM_DAI.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_OHM_DAI.NewPool,
    collateralAddress: addresses.V2.balancer_OHM_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_OHM_DAI.PoolId}">
              Balancer
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'balancer_RDNT_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.Underlying, 'balancerv2_arbitrum'],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_RDNT_ETH.PoolId}">
            balancer
          </a>
          and invest <b>RDNT</b> and/or <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_etsGamma_usdPlus',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/${addresses.ARBITRUM_ONE.V2.lizard_etsGamma_usdPlus.Underlying}">
              solidlizard.finance
            </a>
            and deposit <b>ETS Gamma</b> and <b>USD+</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'convex_FRAX_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.Miner,
        addresses.ARBITRUM_ONE.V2.convex_FRAX_USDC.PoolId,
        CHAINS_ID.ARBITRUM_ONE,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/arbitrum/pools/factory-v2-41/deposit">
              curve.fi
            </a>
            and deposit <b>FRAX</b> and/or <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_ARB_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/${addresses.ARBITRUM_ONE.V2.lizard_ARB_ETH.Underlying}">
              solidlizard.finance
            </a>
            and deposit <b>ARB</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_ARB_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/${addresses.ARBITRUM_ONE.V2.lizard_ARB_USDC.Underlying}">
              solidlizard.finance
            </a>
            and deposit <b>SLIZ</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'sushi_MAGIC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.sushi_MAGIC_ETH.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>MAGIC-ETH</b> liquidity on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'sushi_DPX_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.sushi_DPX_ETH.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>DPX-ETH</b> liquidity on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'sushi_RDPX_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.sushi_RDPX_ETH.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>RDPX-ETH</b> liquidity on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'curve_3CRV_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_3CRV.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_3CRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_3CRV.Miner,
        addresses.MATIC.V2.curve_3CRV.PoolId,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/polygon/pools/aave/deposit">
              Curve.fi
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'curve_3Crypto_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_3Crypto.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_3Crypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_3Crypto.Miner,
        addresses.MATIC.V2.curve_3Crypto.PoolId,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/polygon/pools/atricrypto3/deposit">
              Curve.fi
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'curve_CRV_3Crypto_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_CRV_3Crypto.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_CRV_3Crypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_CRV_3Crypto.Miner,
        addresses.MATIC.V2.curve_CRV_3Crypto.PoolId,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/polygon/pools/factory-crypto-1/deposit">
              Curve.fi
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'curve_MATIC_3Crypto_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.curve_MATIC_3Crypto.NewPool,
    collateralAddress: addresses.MATIC.V2.curve_MATIC_3Crypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.MATIC.V2.curve_MATIC_3Crypto.Miner,
        addresses.MATIC.V2.curve_MATIC_3Crypto.PoolId,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/polygon/pools/factory-crypto-83/deposit">
              Curve.fi
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_frxETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_frxETH.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_frxETH.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_frxETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_frxETH.PoolId}">
            balancer
          </a>
          and provide liquidity.
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_SPHERE_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_SPHERE_MATIC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_SPHERE_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_SPHERE_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_SPHERE_MATIC.PoolId}">
            balancer
          </a>
          and provide liquidity.
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_stETH_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_stETH.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_stETH.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_stETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_stETH.PoolId}">
            balancer
          </a>
          and provide liquidity.
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_wUSDR_USDC_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_wUSDR_USDC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_wUSDR_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_wUSDR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_wUSDR_USDC.PoolId}">
            balancer
          </a>
          and provide liquidity.
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'balancer_OHM_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_OHM_ETH.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_OHM_ETH.NewPool,
    collateralAddress: addresses.V2.balancer_OHM_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_OHM_ETH.PoolId}">
              Balancer
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'balancer_PENDLE_ETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_PENDLE_ETH.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_PENDLE_ETH.NewPool,
    collateralAddress: addresses.V2.balancer_PENDLE_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_PENDLE_ETH.PoolId}">
              Balancer
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'balancer_rETH_BADGER',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_rETH_BADGER.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.balancer_rETH_BADGER.NewPool,
    collateralAddress: addresses.V2.balancer_rETH_BADGER.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_rETH_BADGER.PoolId}">
              Balancer
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'balancer_stETH_rETH_sfrxETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_stETH_rETH_sfrxETH.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.balancer_stETH_rETH_sfrxETH.NewPool,
    collateralAddress: addresses.V2.balancer_stETH_rETH_sfrxETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_stETH_rETH_sfrxETH.PoolId}">
              Balancer
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'balancer_wUSDR_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.balancer_OHM_ETH.Underlying, 'balancerv2_eth'],
    },
    contractAddress: addresses.V2.balancer_wUSDR_USDC.NewPool,
    collateralAddress: addresses.V2.balancer_wUSDR_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.balancer_wUSDR_USDC.PoolId}">
              Balancer
            </a>
            and add liquidity.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'curve_lvUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.curve_lvUSD.NewPool,
    collateralAddress: addresses.V2.curve_lvUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://curve.fi/#/ethereum/pools/factory-v2-268/deposit"
            >
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'iPoison',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.iPoison.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.iPoison.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://poison.finance/App/">
              Poison Finance
            </a>
            and use the "Grow" page to mint iPoison with Poison
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'pGOLD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.pGOLD.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.pGOLD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fiPoison'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Buy pGOLD on&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://sushi.com/swap/">
              SushiSwap
            </a>
            or mint it on&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://poison.finance/App/">
              Poison Finance
            </a>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'pSLVR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.pSLVR.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.pSLVR.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM', 'fiPoison'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Buy pSLVR on&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://sushi.com/swap/">
              SushiSwap
            </a>
            or mint it on&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://poison.finance/App/">
              Poison Finance
            </a>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'poison_pGOLD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://sushi.com/swap/">
              SushiSwap
            </a>
            and add liquidity for pGOLD - USDC.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'poison_pGOLD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pGOLD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://sushi.com/swap/">
              SushiSwap
            </a>
            and add liquidity for pGOLD - USDC.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'poison_pSLVR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pSLVR_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pSLVR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://sushi.com/swap/">
              SushiSwap
            </a>
            and add liquidity for pSLVR - USDC.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'poison_pTSLA_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.poison_pTSLA_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.poison_pTSLA_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://sushi.com/swap/">
              SushiSwap
            </a>
            and add liquidity for pTSLA - USDC.
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'aura_bbiUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_bbiUSD.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_bbiUSD.NewPool,
    collateralAddress: addresses.V2.aura_bbiUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/${addresses.V2.aura_bbiUSD.PoolId}">
              Balancer
            </a>
            and add liquidity with <b>USD Stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_SLIZ_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_SLIZ_ETH.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_SLIZ_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/0x751f3b8ca139bc1f3482b193297485f14208826a">
              solidlizard.finance
            </a>
            and deposit <b>SLIZ</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_ETH_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/0xe20f93279ff3538b1ad70d11ba160755625e3400">
              solidlizard.finance
            </a>
            and deposit <b>WETH</b> and <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_agEUR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_agEUR_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_agEUR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/0x5cd95bc186e41419e6b48a0153833c8105781292">
              solidlizard.finance
            </a>
            and deposit <b>agEUR</b> and <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'lizard_LUSD_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.lizard_LUSD_USDC.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.lizard_LUSD_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://solidlizard.finance/liquidity/0xb1e9b823295b3c69ac651c05d987b67189ff20ad">
              solidlizard.finance
            </a>
            and deposit <b>LUSD</b> and <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'convex_USDT_WBTC_WETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.Miner,
        addresses.ARBITRUM_ONE.V2.convex_USDT_WBTC_WETH_arbitrum.PoolId,
        CHAINS_ID.ARBITRUM_ONE,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/arbitrum/pools/tricrypto/deposit">
              curve.fi
            </a>
            and deposit <b>USDT</b>, <b>WBTC</b> and/or <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'convex_USDC_USDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX_L2,
      params: [
        addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.Miner,
        addresses.ARBITRUM_ONE.V2.convex_USDC_USDT_arbitrum.PoolId,
        CHAINS_ID.ARBITRUM_ONE,
      ],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/#/arbitrum/pools/2pool/deposit">
              curve.fi
            </a>
            and deposit <b>USDT</b>, <b>WBTC</b> and/or <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'balancer_wstETH_wETH_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAINS_ID.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_wETH_arbitrum.PoolId}">
            balancer
          </a>
          and invest <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'balancer_wstETH_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.Underlying,
        'balancerv2_arbitrum',
        true,
        CHAINS_ID.ARBITRUM_ONE,
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wstETH_USDC_arbitrum.PoolId}">
            balancer
          </a>
          and invest <b>ETH</b> and/or <b>USDC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'balancer_wBTC_wETH_USDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.Underlying,
        'balancerv2_arbitrum',
      ],
    },
    contractAddress: addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/arbitrum/pool/${addresses.ARBITRUM_ONE.V2.balancer_wBTC_wETH_USDC_arbitrum.PoolId}">
            balancer
          </a>
          and invest <b>wBTC</b>, <b>ETH</b> and/or <b>USDC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Curve_2pool_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_2pool_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_2pool_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://arbitrum.curve.fi/2pool/deposit"
            >
             Arbitrum Curve
            </a>
            and add assets to <b>2Pool</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['2pool'],
    },
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Curve_EursUsd_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_EursUsd_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_EursUsd_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://arbitrum.curve.fi/eursusd/deposit"
            >
             Arbitrum Curve
            </a>
            and add assets to <b>EursUsd</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['eursusd'],
    },
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Curve_RenWbtc_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_RenWbtc_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_RenWbtc_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://arbitrum.curve.fi/ren/deposit"
            >
             Arbitrum Curve
            </a>
            and add assets to <b>RenWbtc</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['ren'],
    },
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Curve_TriCrypto_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Curve_TriCrypto_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Curve_TriCrypto_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://arbitrum.curve.fi/tricrypto/deposit"
            >
             Arbitrum Curve
            </a>
            and add assets to <b>TriCrypto</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.ARBITRUM_CURVE,
      params: ['tricrypto'],
    },
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'StargateUSDC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.StargateUSDC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.StargateUSDC_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://stargate.finance/pool/USDC-ARBITRUM"
            >
             Arbitrum Stargate Finance
            </a>
            and add <b>USDC</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'StargateUSDT_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.StargateUSDT_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.StargateUSDT_arbitrum.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://stargate.finance/pool/USDT-ARBITRUM"
            >
             Arbitrum Stargate Finance
            </a>
            and add <b>USDT</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Sushi_ETHDAI_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHDAI_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>ETH-DAI</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Sushi_ETHGOHM_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHGOHM_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>ETH-GOHM</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Sushi_ETHMAGIC_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHMAGIC_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>ETH-MAGIC</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Sushi_ETHMIM_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHMIM_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>ETH-MIM</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Sushi_ETHSPELL_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHSPELL_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>ETH-SPELL</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ARBITRUM_ONE,
    id: 'Sushi_ETHSUSHI_arbitrum',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.NewPool,
    collateralAddress: addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.ARBITRUM_ONE.V2.Sushi_ETHSUSHI_arbitrum.Underlying, 'sushiswap_arbitrum'],
    },
    rewardAPY: [],
    rewardTokens: [addresses.ARBITRUM_ONE.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/farm?chainId=42161"
            >
             Arbitrum Sushi
            </a>
            and add <b>ETH-SUSHI</b> on the <i>Pool</i> page
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickGamma_MATIC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.gamma.xyz/vault-detail/WMATIC-WETH-0-Narrow">
            gamma
          </a>
          and invest <b>WMATIC</b> and/or <b>WETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickGamma_MATIC_ETH_wide',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_ETH_wide.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.gamma.xyz/vault-detail/WMATIC-WETH-0-Wide">
            gamma
          </a>
          and invest <b>WMATIC</b> and/or <b>WETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickGamma_MATIC_USDC_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.gamma.xyz/vault-detail/WMATIC-USDC-0-Narrow">
            gamma
          </a>
          and invest <b>WMATIC</b> and/or <b>USDC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickGamma_MATIC_USDC_wide',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_MATIC_USDC_wide.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.gamma.xyz/vault-detail/WMATIC-USDC-0-Wide">
            gamma
          </a>
          and invest <b>WMATIC</b> and/or <b>USDC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickGamma_USDC_ETH_narrow',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_narrow.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.gamma.xyz/vault-detail/USDC-WETH-0-Narrow">
            gamma
          </a>
          and invest <b>USDC</b> and/or <b>WETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickGamma_USDC_ETH_wide',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.QUICKSWAP_GAMMA,
      params: [addresses.MATIC.V2.quickGamma_USDC_ETH_wide.Underlying],
    },
    contractAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_wide.NewPool,
    collateralAddress: addresses.MATIC.V2.quickGamma_USDC_ETH_wide.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.gamma.xyz/vault-detail/USDC-WETH-0-Wide">
            gamma
          </a>
          and invest <b>USDC</b> and/or <b>WETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_bbamusd',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_bbamusd.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_bbamusd.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_bbamusd.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_bbamusd.PoolId}">
            balancer
          </a>
          and invest <b>stable coins</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_tetuBal',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_tetuBal.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_tetuBal.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_tetuBal.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_tetuBal.PoolId}">
            balancer
          </a>
          and invest <b>tetuBal</b> and/or <b>80BAL-20WETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_2BRLUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.balancer_2BRLUSD.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.balancer_2BRLUSD.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2BRLUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_2BRLUSD.PoolId}">
            balancer
          </a>
          and invest <b>USD</b> or <b>BRL</b> stable coins
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_2BRL',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2BRL.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_2BRL.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2BRL.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_2BRL.PoolId}">
            balancer
          </a>
          and invest <b>BRL</b> stable coins
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'apeStake',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.apeStake.NewPool,
    collateralAddress: addresses.V2.apeStake.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_DOLA_FRAXBP',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_DOLA_FRAXBP.NewPool,
    collateralAddress: addresses.V2.convex_DOLA_FRAXBP.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-176'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://curve.fi/factory-v2-176/deposit"
            >
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_USDD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_USDD.NewPool,
    collateralAddress: addresses.V2.convex_USDD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-116'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://curve.fi/factory-v2-116/deposit"
          >
            curve.fi
          </a>
          and deposit <b>USD stablecoins</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_pETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_pETH.NewPool,
    collateralAddress: addresses.V2.convex_pETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-194'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://curve.fi/factory-v2-194/deposit"
          >
            curve.fi
          </a>
          and deposit <b>pETH and/or ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_pBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_pBTC.NewPool,
    collateralAddress: addresses.V2.convex_pBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['factory-v2-99'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://curve.fi/pbtc/deposit"
          >
            curve.fi
          </a>
          and deposit <b>BTC assets</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_CVX_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_CVX_ETH.NewPool,
    collateralAddress: addresses.V2.convex_CVX_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-4'],
    },
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://curve.fi/cvxeth/deposit"
          >
            curve.fi
          </a>
          and deposit <b>CVX and/or ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_MESH_oMOOI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_MESH_oMOOI.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_MESH_oMOOI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x5b1e475933c802117212ce2a4240a4e7999a52a2">
            MeshSwap
          </a>
          and add liquidity for MESH-oMOOI
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_MESH_oZEMIT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_MESH_oZEMIT.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_MESH_oZEMIT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x6fc01d72960af0de3dd97d544fe785b751d752e2">
            MeshSwap
          </a>
          and add liquidity for MESH-oZEMIT
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_USDC_oUSDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_USDC_oUSDC.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_USDC_oUSDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x111d7a73b40aa5ee52bf651e8f07aa26f8e9efe8">
            MeshSwap
          </a>
          and add liquidity for USDC-oUSDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_USDT_oUSDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_USDT_oUSDT.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_USDT_oUSDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x58a7aac84560f994d191e78aeb690855eb2d5b88">
            MeshSwap
          </a>
          and add liquidity for USDT-oUSDT
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_WMATIC_MESH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_WMATIC_MESH.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_WMATIC_MESH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x07a7ab21b582058b71d2aee1b1719926e3451adf">
            MeshSwap
          </a>
          and add liquidity for MATIC-MESH
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_WMATIC_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_WMATIC_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_WMATIC_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x6ffe747579ed4e807dec9b40dba18d15226c32dc">
            MeshSwap
          </a>
          and add liquidity for MATIC-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'meshswap_WMATIC_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.meshswap_WMATIC_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.meshswap_WMATIC_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://meshswap.fi/exchange/pool/detail/0x24af68ff6e3501eaf8b52a9f7935225e524fe617">
            MeshSwap
          </a>
          and add liquidity for MATIC-USDT
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTNOV22_USDC.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTNOV22_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTNOV22_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTNOV22_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x5eF12a086B8A61C0f11a72b36b5EF451FA17f1f1/0x68Fd822a2Bda3dB31fFfA68089696ea4e55A9D36">
            KyberDMM
          </a>
          and add liquidity for JRT(NOV22)-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTMIMONOV22_2EURPAR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTMIMONOV22_2EURPAR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTMIMONOV22_2EURPAR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTMIMONOV22_2EURPAR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x0f110c55EfE62c16D553A3d3464B77e1853d0e97/0x4Fd52587194a0bfd3AC5b8096D15e1a7230bA2eb/0x946bE3eCAebaA3fe2eBb73864ab555A8cfdF49Fd">
            KyberDMM
          </a>
          and add liquidity for JRT-MIMO(NOV22) - 2EUR(PAR)
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTANGLENOV22_2EURagEUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTANGLENOV22_2EURagEUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTANGLENOV22_2EURagEUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTANGLENOV22_2EURagEUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x2fFbCE9099cBed86984286A54e5932414aF4B717/0x63B87304fc9889Ce7356396ea959aA64850a52E7/0x4D44f653B885fbddF486a71508Afd63071ca1A6E">
            KyberDMM
          </a>
          and add liquidity for JRT-ANGLE(NOV22) - 2EUR(agEUR)
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_2EUR_EURe_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2EUR_EURe_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2EUR_EURe_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fJRTNOV22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/304/deposit">
            Curve
          </a>
          and add liquidity for 2EUR (EURe)
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'notional_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_DAI.NewPool,
    collateralAddress: addresses.V2.notional_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://notional.finance/provide/DAI"
            >
             Notional Finance
            </a>
            and mint <b>nDAI</b> by providing <b>DAI</b> liquidity and
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'notional_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_ETH.NewPool,
    collateralAddress: addresses.V2.notional_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://notional.finance/provide/ETH"
            >
             Notional Finance
            </a>
            and mint <b>nETH</b> by providing <b>ETH</b> liquidity and
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'notional_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_USDC.NewPool,
    collateralAddress: addresses.V2.notional_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://notional.finance/provide/USDC"
            >
             Notional Finance
            </a>
            and mint <b>nUSDC</b> by providing <b>USDC</b> liquidity and
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'notional_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.notional_WBTC.NewPool,
    collateralAddress: addresses.V2.notional_WBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://notional.finance/provide/WBTC"
            >
             Notional Finance
            </a>
            and mint <b>nWBTC</b> by providing <b>WBTC</b> liquidity and
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_2EUR_EURT_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2EUR_EURT_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2EUR_EURT_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fJRTSEP22_USDC', 'fJRTNOV22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/286/deposit">
            Curve
          </a>
          and add liquidity for 2EUR (EURT)
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2EUR_PAR.Underlying, 'balancerv2_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_2EUR_PAR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.balancer_2EUR_PAR.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2EUR_PAR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_2EUR_PAR.PoolId}">
            Curve
          </a>
          and add liquidity for 2EUR (PAR)
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTSEP22_USDC.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTSEP22_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTSEP22_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTSEP22_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xcE0248f30d565555B793f42e46E58879F2cDCCa4/0x2623d9a6cceb732f9e86125e107a18e7832b27e5">
            KyberDMM
          </a>
          and add liquidity for JRT(SEP22)-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTMIMO_2EURPAR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTMIMO_2EURPAR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTMIMO_2EURPAR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTMIMO_2EURPAR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x0f110c55EfE62c16D553A3d3464B77e1853d0e97/0xAFC780bb79E308990c7387AB8338160bA8071B67/0x181650dde0a3a457f9e82b00052184ac3feaadf3">
            KyberDMM
          </a>
          and add liquidity for JRT_MIMO_SEP22-2EUR_PAR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_cvxCRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_cvxCRV.NewPool,
    collateralAddress: addresses.V2.convex_cvxCRV.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.convexfinance.com/stake">
              Convex
            </a>
            and convert <b>CRV</b> to <b>cvxCRV</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'aura_auraBAL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.aura_auraBAL.NewPool,
    collateralAddress: addresses.V2.aura_auraBAL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.aura.finance/">
              Aura
            </a>
            and mint auraBAL with <b>BAL</b> or <b>80BAL-20WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'aura_auraBAL_lp',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_auraBAL_lp.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_auraBAL_lp.NewPool,
    collateralAddress: addresses.V2.aura_auraBAL_lp.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd000200000000000000000249">
              Balancer
            </a>
            and add liquidity with <b>B-80BAL-20WETH</b> or <b>auraBAL</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'aura_bbaUSD',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_bbaUSD.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_bbaUSD.NewPool,
    collateralAddress: addresses.V2.aura_bbaUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d">
              Balancer
            </a>
            and add liquidity with <b>USD Stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'aura_rETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_rETH.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_rETH.NewPool,
    collateralAddress: addresses.V2.aura_rETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/0x1e19cf2d73a72ef1332c882f20534b6519be0276000200000000000000000112">
              Balancer
            </a>
            and add liquidity with <b>ETH</b>, <b>WETH</b> or <b>rETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'aura_wstETH',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.aura_wstETH.Underlying, 'balancerv2_eth', true],
    },
    contractAddress: addresses.V2.aura_wstETH.NewPool,
    collateralAddress: addresses.V2.aura_wstETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://app.balancer.fi/#/ethereum/pool/0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080">
              Balancer
            </a>
            and add liquidity with <b>ETH</b>, <b>WETH</b> or <b>wstETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_jEUR_WETH_HODL.Underlying, 'quickswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_jEUR_WETH_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_jEUR_WETH_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_jEUR_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fAURJUL22_WETH'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.exchange/#/add/0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619">
            QuickSwap
          </a>
          and add liquidity for jEUR-WETH
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_jCHF_WETH_HODL.Underlying, 'quickswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_jCHF_WETH_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_jCHF_WETH_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_jCHF_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fAURJUL22_WETH'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.exchange/#/add/0xbD1463F02f61676d53fd183C2B19282BFF93D099/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619">
            QuickSwap
          </a>
          and add liquidity for jCHF-WETH
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_AURJUL22_WETH.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_AURJUL22_2EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AURJUL22_WETH.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AURJUL22_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x8C56600D7D8f9239f124c7C52D3fa018fC801A76/0xf9ce68a9e41f1e7cee5fdcbef99669653aa61390">
            KyberDMM
          </a>
          and add liquidity for AUR(JUL22)-WETH
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'bal_MaticX',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.bal_MaticX.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.bal_MaticX.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_MaticX.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.bal_MaticX.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.bal_MaticX.PoolId}">
            balancer
          </a>
          and invest <b>WMATIC</b> or <b>MaticX</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'bal_stMatic',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [
        addresses.MATIC.V2.bal_stMatic.Underlying,
        'balancerv2_matic',
        true,
        CHAINS_ID.MATIC_MAINNET,
      ],
    },
    contractAddress: addresses.MATIC.V2.bal_stMatic.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_stMatic.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.bal_stMatic.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.bal_stMatic.PoolId}">
            balancer
          </a>
          and invest <b>WMATIC</b> or <b>stMatic</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_2NZD_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2NZD_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2NZD_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fJRTJUL22_USDC', 'fJRTSEP22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/228/deposit">
            Curve
          </a>
          and add liquidity for 2NZD
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTJUL22_USDC.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTJUL22_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTJUL22_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTJUL22_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xD7f13BeE20D6848D9Ca2F26d9A244AB7bd6CDDc0/0x707c7f22d5e3c0234bcc53aee51420d6cdd988f9">
            KyberDMM
          </a>
          and add liquidity for JRT(JUL22)-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_2EUR_agEUR.Underlying, 'balancerv2_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_2EUR_agEUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.balancer_2EUR_agEUR.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_2EUR_agEUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_2EUR_agEUR.PoolId}">
            Curve
          </a>
          and add liquidity for 2EUR (agEUR)
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTANGLE_2EURagEUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTANGLE_2EURagEUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTANGLE_2EURagEUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTANGLE_2EURagEUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/add/0x2fFbCE9099cBed86984286A54e5932414aF4B717/0x6966D20E33A15baFde7E856147E4E5EaF418E145/0x8c2fe36e51657385d3091e92fbacb79263867f16">
            KyberDMM
          </a>
          and add liquidity for JRT_ANGLE_SEP22-2EUR_agEUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_agDENJUL22_2EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_agDENJUL22_2EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_agDENJUL22_2EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_agDENJUL22_2EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x2fFbCE9099cBed86984286A54e5932414aF4B717/0xEEfF5d27e40A5239f6F28d4b0fbE20acf6432717/0x7d85ccf1b7cbaab68c580e14fa8c92e32704404f">
            KyberDMM
          </a>
          and add liquidity for agDEN(JUL22)-2EUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DENJUL22_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_DENJUL22_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DENJUL22_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DENJUL22_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x53d00635aeC4a6379523341AEBC325857f32FdE1/0xAd326c253A84e9805559b73A08724e11E49ca651/0xf84fa79a94afb742a98edf2c7a10ef7134b684bc">
            KyberDMM
          </a>
          and add liquidity for DEN(JUL22)-4EUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JRTMAY22_USDC.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JRTMAY22_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JRTMAY22_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JRTMAY22_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xF5f480Edc68589B51F4217E6aA82Ef7Df5cf789e/0xdaa2c66b06b62bad2e192be0a93f895c855484ee">
            KyberDMM
          </a>
          and add liquidity for JRT(MAY22)-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_2SGD_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2SGD_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2SGD_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'miFARM',
      'WMATIC',
      'fJRTMAY22_USDC',
      'fJRTJUL22_USDC',
      'fJRTSEP22_USDC',
      'fJRTNOV22_USDC',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/22/deposit">
            Curve
          </a>
          and add liquidity for 2SGD
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_UNT_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_UNT_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_UNT_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_UNT_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.UNT],
    rewardTokenSymbols: ['iFARM', 'UNT'],
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'crvTriCrypto3_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.crvTriCrypto3_polygon.NewPool,
    collateralAddress: addresses.MATIC.V2.crvTriCrypto3_polygon.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/atricrypto3/deposit">
            Curve
          </a>
          and add liquidity for aTriCrypto3
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'crvEurtUsd_polygon',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.crvEurtUsd_polygon.NewPool,
    collateralAddress: addresses.MATIC.V2.crvEurtUsd_polygon.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/eurtusd/deposit">
            Curve
          </a>
          and add liquidity for EURT-USD
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_SES_2JPY.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_SES_2JPY',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_SES_2JPY.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_SES_2JPY.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x9120ECada8dc70Dc62cBD49f58e861a09bf83788/0xE8dCeA7Fb2Baf7a9F4d9af608F06d78a687F8d9A/0x3b76F90A8ab3EA7f0EA717F34ec65d194E5e9737">
            KyberDMM
          </a>
          and add liquidity for SES-2JPY
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_2JPY_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2JPY_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2JPY_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'miFARM',
      'WMATIC',
      'fSES_2JPY',
      'fJRTMAY22_USDC',
      'fJRTJUL22_USDC',
      'fJRTSEP22_USDC',
      'fJRTNOV22_USDC',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/255/deposit">
            Curve
          </a>
          and add liquidity for 2JPY
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_QUI_2CAD.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_QUI_2CAD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_QUI_2CAD.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_QUI_2CAD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0xA69b0D5c0C401BBA2d5162138613B5E38584F63F/0xF65fb31ad1ccb2E7A6Ec3B34BEA4c81b68af6695/0x32d8513eDDa5AEf930080F15270984A043933A95">
            KyberDMM
          </a>
          and add liquidity for QUI-2CAD
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_2CAD_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_2CAD_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_2CAD_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'miFARM',
      'WMATIC',
      'fQUI_2CAD',
      'fJRTMAY22_USDC',
      'fJRTJUL22_USDC',
      'fJRTSEP22_USDC',
      'fJRTNOV22_USDC',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/23/deposit">
            Curve
          </a>
          and add liquidity for 2CAD
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crv_UST_WORMHOLE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crv_UST_WORMHOLE.NewPool,
    collateralAddress: addresses.V2.crv_UST_WORMHOLE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['ust-wormhole'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/factory/53/deposit">
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crv_CRV_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crv_CRV_ETH.NewPool,
    collateralAddress: addresses.V2.crv_CRV_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-3'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/crveth/deposit">
              curve.fi
            </a>
            and deposit <b>CRV and/or ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_AUR3_USDC.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_AUR3_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AUR3_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AUR3_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xBF06D9b11126B140788D842a6ed8dC7885C722B3/0xF40E249737c510CCE832286e54cB30E60D4e4656">
            KyberDMM
          </a>
          and add liquidity for AUR(APR22)-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_ORC_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_ORC_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ORC_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_ORC_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.ORC],
    rewardTokenSymbols: ['iFARM', 'ORC'],
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'bal_TUSD_STABLE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.bal_TUSD_STABLE.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.bal_TUSD_STABLE.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_TUSD_STABLE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.bal_TUSD_STABLE.PoolId}">
            balancer
          </a>
          and invest <b>USDT</b>, <b>TUSD</b>, <b>USDC</b> or <b>DAI</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'bal_USDC_WETH_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.bal_USDC_WETH_polygon.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.bal_USDC_WETH_polygon.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_USDC_WETH_polygon.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.bal_USDC_WETH_polygon.PoolId}">
            balancer
          </a>
          and invest <b>USDC</b>, <b>WETH</b> polygon
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'bal_WBTC_WETH_polygon',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.bal_WBTC_WETH_polygon.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.bal_WBTC_WETH_polygon.NewPool,
    collateralAddress: addresses.MATIC.V2.bal_WBTC_WETH_polygon.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.bal_WBTC_WETH_polygon.PoolId}">
            balancer
          </a>
          and invest <b>WBTC</b>, <b>WETH</b> polygon
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LOOKS,
      params: [addresses.V2.looks_LOOKS.RewardPool],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'LOOKS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.looks_LOOKS.NewPool,
    collateralAddress: addresses.V2.looks_LOOKS.NewVault,
    rewardAPY: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.MSTABLE,
      params: ['imUSD', 'polygon'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'mUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.mUSD.NewPool,
    collateralAddress: addresses.MATIC.V2.mUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.quickswap_PSP_MATIC.Underlying, 'quickswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickswap_PSP_MATIC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.quickswap_PSP_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.quickswap_PSP_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://quickswap.exchange/#/add/${addresses.MATIC.pPSP}/${addresses.MATIC.WMATIC}"
            >
              Quickswap
            </a>
            and supply liquidity to the <b>PSP-MATIC</b> pair by depositing <b>PSP</b> and
            <b>MATIC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.uni_LOOKS_ETH.Underlying, 'uniswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'uni_LOOKS_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.uni_LOOKS_ETH.NewPool,
    collateralAddress: addresses.V2.uni_LOOKS_ETH.NewVault,
    rewardAPY: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/#/add/v2/ETH/0xf4d2888d29D722226FafA5d9B24F9164c092421E"
          >
          UniswapV2
          </a>
          and provide liquidity using <b>LOOKS</b> and <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.SUSHI_GENE_ETH.Underlying, 'sushiswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'SUSHI_GENE_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.SUSHI_GENE_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.SUSHI_GENE_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM, addresses.MATIC.pGNOME],
    rewardTokenSymbols: ['miFARM', 'GNOME'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.MATIC.pGENE}/${addresses.MATIC.pWETH}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>GENE-ETH</b> pair by depositing <b>GENE</b> and
            <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.SUSHI_GNOME_ETH.Underlying, 'sushiswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'SUSHI_GNOME_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.SUSHI_GNOME_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.SUSHI_GNOME_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM, addresses.MATIC.pGENE],
    rewardTokenSymbols: ['miFARM', 'GENE'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.MATIC.pGNOME}/${addresses.MATIC.pWETH}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>GNOME-ETH</b> pair by depositing <b>GNOME</b> and
            <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_AUR_USDC_V2.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_AUR_USDC_V2',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AUR_USDC_V2.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AUR_USDC_V2.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x6Fb2415463e949aF08ce50F83E94b7e008BABf07/0xA623aacf9eB4Fc0a29515F08bdABB0d8Ce385cF7">
            KyberDMM
          </a>
          and add liquidity for AURFEB22-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_BABL_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_BABL_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_BABL_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_BABL_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.BABL],
    rewardTokenSymbols: ['iFARM', 'BABL'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DENMAY22_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_DENMAY22_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DENMAY22_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DENMAY22_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://kyberswap.com/#/add/0x51e7B5A0e8E942A62562f85D91501fbfA43121fE/0xAd326c253A84e9805559b73A08724e11E49ca651/0x6e56300267a6dd07da0908557e02756747e1c90e">
            KyberDMM
          </a>
          and add liquidity for DEN(MAY22)-4EUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DEN2_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_DEN2_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DEN2_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DEN2_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dmm.exchange/#/add/0xAd326c253A84e9805559b73A08724e11E49ca651/0xa286eeDAa5aBbAE98F65b152B5057b8bE9893fbB/0xEb6f426963140471a7c1E4337877e6dBf834d2A8">
            KyberDMM
          </a>
          and add liquidity for DEN(MAR22)-4EUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_DEN_4EUR.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_DEN_4EUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_DEN_4EUR.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_DEN_4EUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dmm.exchange/#/add/0xAd326c253A84e9805559b73A08724e11E49ca651/0xf379CB529aE58E1A03E62d3e31565f4f7c1F2020/0x4924B6E1207EFb244433294619a5ADD08ACB3dfF">
            KyberDMM
          </a>
          and add liquidity for DEN-4EUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_4EUR_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_4EUR_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_4EUR_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: [
      'miFARM',
      'WMATIC',
      'fDEN_4EUR',
      'fDEN2_4EUR',
      'fDENMAY22_4EUR',
      'fDENJUL22_4EUR',
    ],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.curve.fi/factory/37/deposit">
            Curve
          </a>
          and add liquidity for 4EUR
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.quick_YEL_MATIC.Underlying, 'quickswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quick_YEL_MATIC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.quick_YEL_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.quick_YEL_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://quickswap.exchange/#/add/${addresses.MATIC.pYEL}/${addresses.MATIC.WMATIC}"
              >
                Quickswap
              </a>
              and supply liquidity to the <b>YEL-MATIC</b> pair by depositing <b>YEL</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.popsicle_ICE_WETH.Underlying, 'sushiswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'popsicle_ICE_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.popsicle_ICE_WETH.NewPool,
    collateralAddress: addresses.MATIC.V2.popsicle_ICE_WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.sushi.com/add/${addresses.MATIC.pWETH}/${addresses.MATIC.pICE}"
              >
                Sushiswap
              </a>
              and supply liquidity to the <b>ICE-ETH</b> pair by depositing <b>ICE</b> and
              <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'polygon_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.polygon_WETH.NewPool,
    collateralAddress: addresses.MATIC.V2.polygon_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'polygon_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.polygon_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.polygon_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'polygon_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.polygon_DAI.NewPool,
    collateralAddress: addresses.MATIC.V2.polygon_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_4200_5500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDC_ETH_4200_5500.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_ETH_4200_5500.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_4200_5500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DAI_ETH_4200_5500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DAI_ETH_4200_5500.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH_4200_5500.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH_4200_5500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_ETH_USDT_4200_5500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_ETH_USDT_4200_5500.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ETH_USDT_4200_5500.NewPool,
    collateralAddress: addresses.V2.UniV3_ETH_USDT_4200_5500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_CNG_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_CNG_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_CNG_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_CNG_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.ecoCNG],
    rewardTokenSymbols: ['iFARM', 'ecoCNG'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_3000_4500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDC_ETH_3000_4500.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_ETH_3000_4500.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_3000_4500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DAI_ETH_3000_4500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DAI_ETH_3000_4500.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH_3000_4500.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH_3000_4500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDT_ETH_3000_4500',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDT_ETH_3000_4500.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDT_ETH_3000_4500.NewPool,
    collateralAddress: addresses.V2.UniV3_USDT_ETH_3000_4500.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_ibEUR',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_ibEUR.NewPool,
    collateralAddress: addresses.V2.convex_ibEUR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['fixedforex:eur'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://curve.fi/factory/3/deposit">
              curve.fi
            </a>
            and deposit <b>EUR stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DON_WETH_full_range',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DON_WETH_full_range.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DON_WETH_full_range.NewPool,
    collateralAddress: addresses.V2.UniV3_DON_WETH_full_range.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.DON],
    rewardTokenSymbols: ['iFARM', 'DON'],
    vestingDescriptionOverride: {
      DON: '',
    },
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_MIM',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_MIM.NewPool,
    collateralAddress: addresses.V2.convex_MIM.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['mim'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/mim/deposit">
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
    </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'convex_EURT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.convex_EURT.NewPool,
    collateralAddress: addresses.V2.convex_EURT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['eurt'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/eurt/deposit">
              curve.fi
            </a>
            and deposit <b>EUR stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'liquity_LQTY',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.liquity_LQTY.NewPool,
    collateralAddress: addresses.V2.liquity_LQTY.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.quickswap_ETH_USDT.Underlying, 'quickswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickswap_ETH_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.quickswap_ETH_USDT.NewPool,
    collateralAddress: addresses.MATIC.V2.quickswap_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://quickswap.exchange/#/add/${addresses.MATIC.pWETH}/${addresses.MATIC.pUSDT}">
              quickswap
            </a>
            and supply liquidity to the <b>ETH-USDT</b> pair by depositing <b>ETH</b> and
            <b>USDT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.quickswap_IFARM_QUICK.Underlying, 'quickswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'quickswap_IFARM_QUICK',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.quickswap_IFARM_QUICK.NewPool,
    collateralAddress: addresses.MATIC.V2.quickswap_IFARM_QUICK.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://quickswap.exchange/#/add/${addresses.MATIC.miFARM}/${addresses.MATIC.QUICK}">
            quickswap
          </a>
          and supply liquidity to the <b>IFARM-QUICK</b> pair by depositing <b>IFARM</b> and
            <b>QUICK</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.sushiswap_USDC_ETH.Underlying, 'sushiswap_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'sushiswap_USDC_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.sushiswap_USDC_ETH.NewPool,
    collateralAddress: addresses.MATIC.V2.sushiswap_USDC_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.MATIC.pUSDC}/${addresses.MATIC.pWETH}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>USDC-ETH</b> pair by depositing <b>USDC</b> and
            <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'profit-sharing-farm',
    type: POOL_TYPES.PROFIT_SHARING,
    contractAddress: addresses.pools.ProfitSharingFARMUpstream,
    autoStakePoolAddress: addresses.pools.ProfitSharingFARMAutoStake,
    collateralAddress: addresses.FARM,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: null,
    hideNativeApy: true,
    watchAsset: {
      address: addresses.FARM,
      symbol: 'FARM',
      decimals: '18',
      icon: '/icons/farm.png',
    },
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.rari.capital/fuse/pool/24"
          >
            Rari Fuse
          </a>
          and provide liquidity using <b>USDC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
    id: 'farmstead-usdc',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.FARMSteadUSDCPool,
    collateralAddress: addresses.FARMSteadUSDC,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.RARI_FARMSTEAD_USDC,
      params: [],
    },
    watchAsset: {
      address: addresses.FARMSteadUSDC,
      symbol: 'FARMSteadUSDC',
      decimals: '8',
    },
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'farm-weth',
    displayName: 'FARM/ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.FARM_WETH_LP, 'uniswap_eth'],
    },
    externalPoolURL: `https://v2.info.uniswap.org/pair/${addresses.FARM_WETH_LP}`,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.FARM_WETHPool,
    collateralAddress: addresses.FARM_WETH_LP,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.FARM}/ETH"
            >
              Uniswap
            </a>
            and provide liquidity using <b>FARM</b> and <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
            <br />
            The current version of the FARM/ETH pool does not allow partial withdrawals. You can
            only withdraw the maximum amount.
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'farm-grain',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.FARM_GRAIN_LP, 'uniswap_eth'],
    },
    externalPoolURL: `https://v2.info.uniswap.org/pair/${addresses.FARM_GRAIN_LP}`,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.GRAINPool,
    collateralAddress: addresses.FARM_GRAIN_LP,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.FARM}/${addresses.GRAIN}"
            >
              Uniswap
            </a>
            and provide liquidity using <b>FARM</b> and <b>GRAIN</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
            <br />
            The current version of the FARM/GRAIN pool does not allow partial withdrawals. You can
            only withdraw the maximum amount.
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'YCRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.YCRV.NewPool,
    collateralAddress: addresses.V2.YCRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['ypool'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/iearn/deposit">
              curve.fi
            </a>
            deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'ThreePool',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.ThreePool.NewPool,
    collateralAddress: addresses.V2.ThreePool.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['3pool'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/3pool/deposit">
              curve.fi
            </a>
            deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    zapperFiTokens: ['USDC', 'DAI', 'USDT', 'WETH'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvHBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvHBTC.NewPool,
    collateralAddress: addresses.V2.crvHBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['hbtc'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/hbtc/deposit">
              curve.fi
            </a>
            deposit <b>BTC assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvHUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvHUSD.NewPool,
    collateralAddress: addresses.V2.crvHUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['husd'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/husd/deposit">
              curve.fi
            </a>
            deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvCOMPOUND',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvCOMPOUND.NewPool,
    collateralAddress: addresses.V2.crvCOMPOUND.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['compound'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.curve.fi/compound/deposit"
            >
              curve.fi
            </a>
            deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvBUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvBUSD.NewPool,
    collateralAddress: addresses.V2.crvBUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['busd'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/busd/deposit">
              curve.fi
            </a>
            deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvUSDN',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvUSDN.NewPool,
    collateralAddress: addresses.V2.crvUSDN.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['25'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/usdn/deposit">
              curve.fi
            </a>
            deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.USDC.NewPool,
    collateralAddress: addresses.V2.USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    zapperFiTokens: ['DAI', 'USDT'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.USDT.NewPool,
    collateralAddress: addresses.V2.USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    zapperFiTokens: ['USDC', 'DAI'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'TUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.TUSDPool,
    collateralAddress: addresses.ProxiedVaultTUSD,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.DAI.NewPool,
    collateralAddress: addresses.V2.DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    zapperFiTokens: ['USDC', 'USDT'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvOBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvOBTC.NewPool,
    collateralAddress: addresses.V2.crvOBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['obtc'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/obtc/deposit">
              curve.fi
            </a>
            deposit <b>BTC assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'TBTCMixed',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.TBTCMixed.NewPool,
    collateralAddress: addresses.V2.TBTCMixed.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['tbtc'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/tbtc/deposit">
              curve.fi
            </a>
            deposit <b>BTC assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvRenWBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvRenWBTC.NewPool,
    collateralAddress: addresses.V2.crvRenWBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['ren'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ren/deposit">
              curve.fi
            </a>
            deposit <b>BTC assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.WBTC.NewPool,
    collateralAddress: addresses.V2.WBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'renBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.renBTC.NewPool,
    collateralAddress: addresses.V2.renBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    uniPool: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.UNI_LP_WETH_DPI, 'uniswap_eth'],
    },
    id: 'uni_WETH_DPI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.pools.UNI_LP_WETH_DPIPool,
    collateralAddress: addresses.VaultUNI_LP_WETH_DPI,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b/ETH"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>ETH-DPI</b> pair by depositing <b>ETH</b> and <b>DPI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.WETH.NewPool,
    collateralAddress: addresses.V2.WETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.UNI_BAC_DAI.Underlying, 'uniswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UNI_BAC_DAI',
    isDegen: true,
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.UNI_BAC_DAI.NewPool,
    collateralAddress: addresses.V2.UNI_BAC_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.BAC}/${addresses.DAI}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.BAC}/${addresses.DAI}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>BAC-DAI</b> pair by depositing <b>BAC</b> and <b>DAI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.UNI_DAI_BAS.Underlying, 'uniswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UNI_DAI_BAS',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.UNI_DAI_BAS.NewPool,
    collateralAddress: addresses.V2.UNI_DAI_BAS.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.DAI}/${addresses.BAS}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.DAI}/${addresses.BASV2}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>DAI-BASv2</b> pair by depositing <b>DAI</b> and{' '}
            <b>BASv2</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'lfBTC_LIFT',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.lfBTC_LIFT.NewPool,
    collateralAddress: addresses.V2.lfBTC_LIFT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.sushi.com/add/${addresses.lfBTC}/{addresses.LIFT}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.lfBTC}/${addresses.LIFT}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>LFBTC-LIFT</b> pair by depositing <b>lfBTC</b> and{' '}
            <b>LIFT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'wBTC_lfBTC',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.wBTC_lfBTC.NewPool,
    collateralAddress: addresses.V2.wBTC_lfBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.sushi.com/add/${addresses.lfBTC}/${addresses.WBTC}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.lfBTC}/${addresses.WBTC}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>WBTC-LFBTC</b> pair by depositing <b>WBTC</b> and{' '}
            <b>lfBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UNI_MIC_USDT',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.UNI_MIC_USDT.NewPool,
    collateralAddress: addresses.V2.UNI_MIC_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://sushiswap.fi/pair/${addresses.V2.UNI_MIC_USDT.Underlying}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sushiswap.fi/pair/${addresses.V2.UNI_MIC_USDT.Underlying}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>MIC-USDT</b> pair by depositing <b>MIC</b> and{' '}
            <b>USDT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UNI_MIS_USDT',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.UNI_MIS_USDT.NewPool,
    collateralAddress: addresses.V2.UNI_MIS_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://sushiswap.fi/pair/${addresses.V2.UNI_MIS_USDT.Underlying}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sushiswap.fi/pair/${addresses.V2.UNI_MIS_USDT.Underlying}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>MIS-USDT</b> pair by depositing <b>MIS</b> and{' '}
            <b>USDT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    id: 'sushi_PERP_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_PERP_ETH.Underlying, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.sushi_PERP_ETH.NewPool,
    collateralAddress: addresses.V2.sushi_PERP_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/${addresses.PERP}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/${addresses.PERP}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>PERP-ETH</b> pair by depositing <b>PERP</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_SUSHI_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_SUSHI_WETH.Underlying, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_SUSHI_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_SUSHI_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-SUSHI</b> pair by depositing <b>ETH</b> and{' '}
            <b>SUSHI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_DAI_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_DAI_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_DAI_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_DAI_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x6B175474E89094C44Da98b954EedeAC495271d0F`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0x6B175474E89094C44Da98b954EedeAC495271d0F"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-DAI</b> pair by depositing <b>ETH</b> and <b>DAI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_USDC_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDC_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_USDC_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_USDC_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-USDC</b> pair by depositing <b>ETH</b> and{' '}
            <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_USDT_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDT_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_USDT_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_USDT_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xdAC17F958D2ee523a2206206994597C13D831ec7`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0xdAC17F958D2ee523a2206206994597C13D831ec7"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-USDT</b> pair by depositing <b>ETH</b> and{' '}
            <b>USDT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_WBTC_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_WBTC_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_WBTC_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_WBTC_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-WBTC</b> pair by depositing <b>ETH</b> and{' '}
            <b>WBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_UST_WETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_UST_WETH, 'sushiswap_eth'],
    },
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_UST_WETH.NewPool,
    collateralAddress: addresses.V2.sushi_UST_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>UST-ETH</b> pair by depositing <b>UST</b> and <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_DAI.Underlying],
    },
    id: 'oneInch_ETH_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_DAI.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        These vaults are migrated from <b>1INCH</b> to <b>Sushiswap</b> and now earning the same{' '}
        <b>iFARM</b> and <b>fSUSHI</b> yields as <b>SUSHI HODL</b> vaults.
        <br />
        <br /> When you withdraw, you receive <b>Sushiswap LP tokens</b> as well as proportional{' '}
        <b>iFARM</b> and <b>fSUSHI</b> accumulated in the <b>HODL</b> vaults.
        <br />
        <br /> To deposit more assets, use the vaults in the <b>SUSHI HODL</b> section directly.
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_USDC.Underlying],
    },
    id: 'oneInch_ETH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_USDC.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        These vaults are migrated from <b>1INCH</b> to <b>Sushiswap</b> and now earning the same{' '}
        <b>iFARM</b> and <b>fSUSHI</b> yields as <b>SUSHI HODL</b> vaults.
        <br />
        <br /> When you withdraw, you receive <b>Sushiswap LP tokens</b> as well as proportional{' '}
        <b>iFARM</b> and <b>fSUSHI</b> accumulated in the <b>HODL</b> vaults.
        <br />
        <br /> To deposit more assets, use the vaults in the <b>SUSHI HODL</b> section directly.
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_USDT.Underlying],
    },
    id: 'oneInch_ETH_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_USDT.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        These vaults are migrated from <b>1INCH</b> to <b>Sushiswap</b> and now earning the same{' '}
        <b>iFARM</b> and <b>fSUSHI</b> yields as <b>SUSHI HODL</b> vaults.
        <br />
        <br /> When you withdraw, you receive <b>Sushiswap LP tokens</b> as well as proportional{' '}
        <b>iFARM</b> and <b>fSUSHI</b> accumulated in the <b>HODL</b> vaults.
        <br />
        <br /> To deposit more assets, use the vaults in the <b>SUSHI HODL</b> section directly.
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_WBTC.Underlying],
    },
    id: 'oneInch_ETH_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_WBTC.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_WBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        These vaults are migrated from <b>1INCH</b> to <b>Sushiswap</b> and now earning the same{' '}
        <b>iFARM</b> and <b>fSUSHI</b> yields as <b>SUSHI HODL</b> vaults.
        <br />
        <br /> When you withdraw, you receive <b>Sushiswap LP tokens</b> as well as proportional{' '}
        <b>iFARM</b> and <b>fSUSHI</b> accumulated in the <b>HODL</b> vaults.
        <br />
        <br /> To deposit more assets, use the vaults in the <b>SUSHI HODL</b> section directly.
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_ETH_1INCH.Underlying],
    },
    id: 'oneInch_ETH_1INCH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_ETH_1INCH.NewPool,
    collateralAddress: addresses.V2.oneInch_ETH_1INCH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://1inch.exchange/#/dao/pools?token0=0x0000000000000000000000000000000000000000&token1=${addresses['1INCH']}"
            >
              1Inch
            </a>
            and supply liquidity to the <b>1INCH-ETH</b> pair by depositing <b>1INCH</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_1INCH_USDC.Underlying],
    },
    id: 'oneInch_1INCH_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_1INCH_USDC.NewPool,
    collateralAddress: addresses.V2.oneInch_1INCH_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://1inch.exchange/#/dao/pools?token0=${addresses.USDC}&token1=${addresses['1INCH']}"
            >
              1Inch
            </a>
            and supply liquidity to the <b>USDC-1INCH</b> pair by depositing <b>1INCH</b> and{' '}
            <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.oneInch_1INCH_WBTC.NewVault],
    },
    id: 'oneInch_1INCH_WBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.oneInch_1INCH_WBTC.NewPool,
    collateralAddress: addresses.V2.oneInch_1INCH_WBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: 'https://1inch.exchange/#/dao/pools',
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://1inch.exchange/#/dao/pools?token0=${addresses.WBTC}&token1=${addresses['1INCH']}"
            >
              1Inch
            </a>
            and supply liquidity to the <b>1INCH-WBTC</b> pair by depositing <b>1INCH</b> and{' '}
            <b>WBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.basisGold_DAI_BSG.Underlying],
    },
    id: 'basisGold_DAI_BSG',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.basisGold_DAI_BSG.NewPool,
    collateralAddress: addresses.V2.basisGold_DAI_BSG.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.DAI}/${addresses.BSG}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.DAI}/${addresses.BSG}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>DAI-BSG</b> pair by depositing <b>DAI</b> and <b>BSG</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    hideNativeApy: true,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'basisGold_DAI_BSGS',
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.basisGold_DAI_BSGS.Underlying],
    },
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.basisGold_DAI_BSGS.NewPool,
    collateralAddress: addresses.V2.basisGold_DAI_BSGS.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.DAI}/${addresses.BSGS}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.DAI}/${addresses.BSGS}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>DAI-BSGS</b> pair by depositing <b>DAI</b> and{' '}
            <b>BSGS</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
    hideNativeApy: true,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'basisGold_BAC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.basisGold_BAC.NewPool,
    collateralAddress: addresses.V2.basisGold_BAC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'basisGold_ESD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.basisGold_ESD.NewPool,
    collateralAddress: addresses.V2.basisGold_ESD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'basisGold_DSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.basisGold_DSD.NewPool,
    collateralAddress: addresses.V2.basisGold_DSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvEURS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvEURS.NewPool,
    collateralAddress: addresses.V2.crvEURS.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['eurs'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/eurs/deposit">
              curve.fi
            </a>
            and deposit <b>EUR stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvGUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvGUSD.NewPool,
    collateralAddress: addresses.V2.crvGUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['gusd'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/gusd/deposit">
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvUST',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvUST.NewPool,
    collateralAddress: addresses.V2.crvUST.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['ust'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust/deposit">
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.mirrorAAPL.Underlying],
    },
    id: 'mirrorAAPL',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.mirrorAAPL.NewPool,
    collateralAddress: addresses.V2.mirrorAAPL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.mAAPL}/${addresses.UST}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Got to
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust">
              curve.fi
            </a>
            and buy <b>UST</b> using stablecoins and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=${addresses.UST}&outputCurrency=${addresses.mAAPL}"
            >
              buy mAAPL
            </a>
            with some <b>UST</b>. Visit{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.mAAPL}/${addresses.UST}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MIRROR-AAPL</b> pair by depositing <b>mAAPL</b> and{' '}
            <b>UST</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.mirrorAMZN.Underlying],
    },
    id: 'mirrorAMZN',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.mirrorAMZN.NewPool,
    collateralAddress: addresses.V2.mirrorAMZN.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.mAMZN}/${addresses.UST}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Got to
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust">
              curve.fi
            </a>
            and buy <b>UST</b> using stablecoins and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=${addresses.UST}&outputCurrency=${addresses.mAMZN}"
            >
              buy mAMZN
            </a>
            with some <b>UST</b>. Visit{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.mAMZN}/${addresses.UST}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MIRROR-AMZN</b> pair by depositing <b>mAMZN</b> and{' '}
            <b>UST</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.mirrorGOOG.Underlying],
    },
    id: 'mirrorGOOG',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.mirrorGOOG.NewPool,
    collateralAddress: addresses.V2.mirrorGOOG.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.mGOOGL}/${addresses.UST}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Got to
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust">
              curve.fi
            </a>
            and buy <b>UST</b> using stablecoins and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=${addresses.UST}&outputCurrency=${addresses.mGOOGL}"
            >
              buy mGOOGL
            </a>
            with some <b>UST</b>. Visit{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.mGOOGL}/${addresses.UST}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MIRROR-GOOG</b> pair by depositing <b>mGOOGL</b> and{' '}
            <b>UST</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.mirrorTSLA.Underlying],
    },
    id: 'mirrorTSLA',
    isDegen: true,
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.mirrorTSLA.NewPool,
    collateralAddress: addresses.V2.mirrorTSLA.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.mTSLA}/${addresses.UST}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Got to
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust">
              curve.fi
            </a>
            and buy <b>UST</b> using stablecoins and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=${addresses.UST}&outputCurrency=${addresses.mTSLA}"
            >
              buy mTSLA
            </a>
            with some <b>UST</b>. Visit{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.mTSLA}/${addresses.UST}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MIRROR-TSLA</b> pair by depositing <b>mTSLA</b> and{' '}
            <b>UST</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.mirrorNFLX.Underlying],
    },
    id: 'mirrorNFLX',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.mirrorNFLX.NewPool,
    collateralAddress: addresses.V2.mirrorNFLX.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.mNFLX}/${addresses.UST}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Got to
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust">
              curve.fi
            </a>
            and buy <b>UST</b> using stablecoins and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=${addresses.UST}&outputCurrency=${addresses.mNFLX}"
            >
              buy mNFLX
            </a>
            with some <b>UST</b>. Visit{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.mNFLX}/${addresses.UST}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MIRROR-NFLX</b> pair by depositing <b>mNFLX</b> and{' '}
            <b>UST</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    fullBuyback: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.mirrorTWTR.Underlying],
    },
    id: 'mirrorTWTR',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.mirrorTWTR.NewPool,
    collateralAddress: addresses.V2.mirrorTWTR.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.mTWTR}/${addresses.UST}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Got to
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/ust">
              curve.fi
            </a>
            and buy <b>UST</b> using stablecoins and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=${addresses.UST}&outputCurrency=${addresses.mTWTR}"
            >
              buy mTWTR
            </a>
            with some <b>UST</b>. Visit{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.mTWTR}/${addresses.UST}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MIRROR-TWTR</b> pair by depositing <b>mTWTR</b> and{' '}
            <b>UST</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvSTETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvSTETH.NewPool,
    collateralAddress: addresses.V2.crvSTETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['14'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/steth/deposit">
              curve.fi
            </a>
            and deposit <b>ETH assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvAAVE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvAAVE.NewPool,
    collateralAddress: addresses.V2.crvAAVE.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.FARM],
    rewardTokenSymbols: ['FARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/aave/deposit">
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.klondike_WBTC_KBTC.Underlying],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'klondike_WBTC_KBTC',
    isDegen: true,
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.klondike_WBTC_KBTC.NewPool,
    collateralAddress: addresses.V2.klondike_WBTC_KBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.KBTC}/${addresses.WBTC}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.KBTC}/${addresses.WBTC}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>WBTC-KBTC</b> pair by depositing <b>KBTC</b> and{' '}
            <b>WBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.klondike_WBTC_KLON.Underlying],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'klondike_WBTC_KLON',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.klondike_WBTC_KLON.NewPool,
    collateralAddress: addresses.V2.klondike_WBTC_KLON.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.KLON}/${addresses.WBTC}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.KLONX}/${addresses.WBTC}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>WBTC-KLONX</b> pair by depositing <b>KLONX</b> and{' '}
            <b>WBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvLink',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.crvLink.NewPool,
    collateralAddress: addresses.V2.crvLink.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['link'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/link/deposit">
              curve.fi
            </a>
            and deposit <b>LINK assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'SUSHI',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.SUSHI.NewPool,
    collateralAddress: addresses.V2.SUSHI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://exchange.sushi.com/">
              Sushiswap
            </a>
            and convert assets to <b>SUSHI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_DAI_WETH, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_DAI_WETH_HODL',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.sushi_DAI_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_DAI_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x6B175474E89094C44Da98b954EedeAC495271d0F`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0x6B175474E89094C44Da98b954EedeAC495271d0F"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-DAI</b> pair by depositing <b>ETH</b> and <b>DAI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDC_WETH, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_USDC_WETH_HODL',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.sushi_USDC_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_USDC_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-USDC</b> pair by depositing <b>ETH</b> and{' '}
            <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_USDT_WETH, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_USDT_WETH_HODL',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.sushi_USDT_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_USDT_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0xdAC17F958D2ee523a2206206994597C13D831ec7`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0xdAC17F958D2ee523a2206206994597C13D831ec7"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-USDT</b> pair by depositing <b>ETH</b> and{' '}
            <b>USDT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.sushi_WBTC_WETH, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_WBTC_WETH_HODL',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.sushi_WBTC_WETH_HODL.NewPool,
    collateralAddress: addresses.V2.sushi_WBTC_WETH_HODL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM', 'fSUSHI'],
    externalPoolURL: `https://exchange.sushiswapclassic.org/#/add/ETH/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.sushiswapclassic.org/#/add/ETH/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>ETH-WBTC</b> pair by depositing <b>ETH</b> and{' '}
            <b>WBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvUSDP',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.crvUSDP.NewPool,
    collateralAddress: addresses.V2.crvUSDP.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['usdp'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.curve.fi/usdp/deposit">
              curve.fi
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Muse.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Muse',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Muse.NewPool,
    collateralAddress: addresses.V2.nft20_Muse.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.MUSE}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MUSE-ETH</b> pair by depositing <b>MUSE</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Dudes.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Dudes',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Dudes.NewPool,
    collateralAddress: addresses.V2.nft20_Dudes.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.NUDES20}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>DUDES20-ETH</b> pair by depositing <b>DUDES20</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Mask.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Mask',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Mask.NewPool,
    collateralAddress: addresses.V2.nft20_Mask.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.MASK20}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MASK20-ETH</b> pair by depositing <b>MASK20</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Rope.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Rope',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Rope.NewPool,
    collateralAddress: addresses.V2.nft20_Rope.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.ROPE20}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>ROPE20-ETH</b> pair by depositing <b>ROPE20</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Mooncat.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Mooncat',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Mooncat.NewPool,
    collateralAddress: addresses.V2.nft20_Mooncat.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.MCAT20}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MCAT20-ETH</b> pair by depositing <b>MCAT20</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_XVS',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_XVS.NewPool,
    collateralAddress: addresses.BSC.V2.venus_XVS.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vXVS'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_DAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_DAI.NewPool,
    collateralAddress: addresses.BSC.V2.venus_DAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vDAI'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_USDC.NewPool,
    collateralAddress: addresses.BSC.V2.venus_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vUSDC'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_USDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_USDT.NewPool,
    collateralAddress: addresses.BSC.V2.venus_USDT.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vUSDT'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_BUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_BUSD.NewPool,
    collateralAddress: addresses.BSC.V2.venus_BUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vBUSD'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_VAI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_VAI.NewPool,
    collateralAddress: addresses.BSC.V2.venus_VAI.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_ETH.NewPool,
    collateralAddress: addresses.BSC.V2.venus_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vETH'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_BETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_BETH.NewPool,
    collateralAddress: addresses.BSC.V2.venus_BETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vBETH'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_BTCB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_BTCB.NewPool,
    collateralAddress: addresses.BSC.V2.venus_BTCB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vBTC'],
    },
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'venus_WBNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.venus_WBNB.NewPool,
    collateralAddress: addresses.BSC.V2.venus_WBNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.VENUS,
      params: ['vBNB'],
    },
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.pancake_BUSD_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'pancake_BUSD_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.pancake_BUSD_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.pancake_BUSD_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/#/add/${addresses.BSC.bUSD}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>BUSD-BNB</b> pair by depositing <b>BUSD</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'pancake_CAKE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.pancake_CAKE.NewPool,
    collateralAddress: addresses.BSC.V2.pancake_CAKE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/"
            >
              PancakeSwap
            </a>
            and convert assets to <b>CAKE</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.pancake_CAKE_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'pancake_CAKE_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.pancake_CAKE_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.pancake_CAKE_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/#/add/${addresses.BSC.CAKE}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>CAKE-BNB</b> pair by depositing <b>CAKE</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.pancake_ETH_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'pancake_ETH_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.pancake_ETH_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.pancake_ETH_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/#/add/${addresses.BSC.bETH}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>ETH-BNB</b> pair by depositing <b>ETH</b> and <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.pancake_USDT_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'pancake_USDT_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.pancake_USDT_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.pancake_USDT_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/#/add/${addresses.BSC.bUSDT}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>USDT-BNB</b> pair by depositing <b>USDT</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.pancake_XVS_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'pancake_XVS_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.pancake_XVS_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.pancake_XVS_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/#/add/${addresses.BSC.XVS}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>XVS-BNB</b> pair by depositing <b>XVS</b> and <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'goose_EGG_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.goose_EGG_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.goose_EGG_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.goosedefi.com/#/add/${addresses.BSC.EGG}/${addresses.BSC.wBNB}"
            >
              Goose
            </a>
            and supply liquidity to the <b>EGG-BNB</b> pair by depositing <b>EGG</b> and <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'goose_EGG_BUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.goose_EGG_BUSD.NewPool,
    collateralAddress: addresses.BSC.V2.goose_EGG_BUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.goosedefi.com/#/add/${addresses.BSC.EGG}/${addresses.BSC.bUSD}"
            >
              Goose
            </a>
            and supply liquidity to the <b>EGG-BUSD</b> pair by depositing <b>EGG</b> and{' '}
            <b>BUSD</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'goose_EGG',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.goose_EGG.NewPool,
    collateralAddress: addresses.BSC.V2.goose_EGG.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://exchange.goosedefi.com/">
              Goose
            </a>
            and convert assets to <b>EGG</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'bdo_BDO_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.bdo_BDO_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.bdo_BDO_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://v1exchange.pancakeswap.finance/#/add/${addresses.BSC.BDO}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>BDO-BNB</b> pair by depositing <b>BDO</b> and <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'bdo_BDO_BUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.bdo_BDO_BUSD.NewPool,
    collateralAddress: addresses.BSC.V2.bdo_BDO_BUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://v1exchange.pancakeswap.finance/#/add/${addresses.BSC.BDO}/${addresses.BSC.bUSD}"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>BDO-BUSD</b> pair by depositing <b>BDO</b> and{' '}
            <b>BUSD</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'bdo_SBDO_BUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.bdo_SBDO_BUSD.NewPool,
    collateralAddress: addresses.BSC.V2.bdo_SBDO_BUSD.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://v1exchange.pancakeswap.finance/#/add/${addresses.BSC.sBDO}/${addresses.BSC.bUSD}"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>SBDO-BUSD</b> pair by depositing <b>SBDO</b> and{' '}
            <b>BUSD</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'oneInch_1INCH_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.oneInch_1INCH_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.oneInch_1INCH_BNB.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://1inch.exchange/#/dao/pools?network=56&token0=${addresses.BSC.b1INCH}&token1=0x0000000000000000000000000000000000000000"
            >
              1INCH
            </a>
            and supply liquidity to the <b>1INCH-BNB</b> pair by depositing <b>1INCH</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'oneInch_1INCH_renBTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.oneInch_1INCH_renBTC.NewPool,
    collateralAddress: addresses.BSC.V2.oneInch_1INCH_renBTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://1inch.exchange/#/dao/pools?network=56&token0=${addresses.BSC.b1INCH}&token1=${addresses.BSC.bRENBTC}"
            >
              1INCH
            </a>
            and supply liquidity to the <b>1INCH-RENBTC</b> pair by depositing <b>1INCH</b> and{' '}
            <b>RENBTC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Meme.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Meme',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Meme.NewPool,
    collateralAddress: addresses.V2.nft20_Meme.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.MEME20}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>MEME20-ETH</b> pair by depositing <b>MEME20</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    isDegen: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.nft20_Gpunks.Underlying, 'uniswap_eth'],
    },
    id: 'nft20_Gpunks',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.nft20_Gpunks.NewPool,
    collateralAddress: addresses.V2.nft20_Gpunks.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.GPUNKS20}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>GPUNKS20-ETH</b> pair by depositing <b>GPUNKS20</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    uniPool: true,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.uni_ETH_MVI.Underlying, 'uniswap_eth'],
    },
    id: 'uni_ETH_MVI',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.uni_ETH_MVI.NewPool,
    collateralAddress: addresses.V2.uni_ETH_MVI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.MVI}/ETH"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>ETH-MVI</b> pair by depositing <b>ETH</b> and <b>MVI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.klondike_KXUSD_DAI.Underlying],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'klondike_KXUSD_DAI',
    fullBuyback: true,
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.klondike_KXUSD_DAI.NewPool,
    collateralAddress: addresses.V2.klondike_KXUSD_DAI.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    externalPoolURL: `https://app.uniswap.org/#/add/v2/${addresses.KXUSD}/${addresses.DAI}`,
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/${addresses.KXUSD}/${addresses.DAI}"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>KXUSD-DAI</b> pair by depositing <b>KXUSD</b> and{' '}
            <b>DAI</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'ellipsis_3pool',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.ellipsis_3pool.NewPool,
    collateralAddress: addresses.BSC.V2.ellipsis_3pool.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ellipsis.finance/3pool/deposit"
            >
              ellipsis
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.ellipsis_EPS_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'ellipsis_EPS_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.ellipsis_EPS_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.ellipsis_EPS_BNB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pancake.ellipsis.finance/#/add/${addresses.BSC.EPS}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>EPS-BNB</b> pair by depositing <b>EPS</b> and <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'swirl_SWIRL_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.swirl_SWIRL_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.swirl_SWIRL_BNB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://v1exchange.pancakeswap.finance/#/add/${addresses.BSC.SWIRL}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>SWIRL-BNB</b> pair by depositing <b>SWIRL</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.space_SPACE_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'space_SPACE_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.space_SPACE_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.space_SPACE_BNB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pancake.ellipsis.finance/#/add/${addresses.BSC.SPACE}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>SPACE-BNB</b> pair by depositing <b>SPACE</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.space_SPACE_BUSD.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'space_SPACE_BUSD',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.space_SPACE_BUSD.NewPool,
    collateralAddress: addresses.BSC.V2.space_SPACE_BUSD.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pancake.ellipsis.finance/#/add/${addresses.BSC.SPACE}/${addresses.BSC.bUSD}"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>SPACE-BUSD</b> pair by depositing <b>SPACE</b> and{' '}
            <b>BUSD</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.belt_BELT_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'belt_BELT_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.belt_BELT_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.belt_BELT_BNB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/#/add/${addresses.BSC.BELT}/BNB"
            >
              PancakeSwap
            </a>
            and supply liquidity to the <b>BELT-BNB</b> pair by depositing <b>BELT</b> and{' '}
            <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'belt_Venus',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.belt_Venus.NewPool,
    collateralAddress: addresses.BSC.V2.belt_Venus.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://beta.belt.fi/">
              belt
            </a>
            , scroll down to the <b>Belt LP Staking</b> section and deposit <b>USD stablecoins</b>{' '}
            into the <b>venus</b> pool
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'belt_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.belt_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.belt_BNB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BELT,
      params: [addresses.BSC.V2.belt_BNB.PoolId],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://beta.belt.fi/">
              belt
            </a>
            , scroll down to the <b>Belt Vaults</b> section and deposit <b>BNB</b> into the{' '}
            <b>BNB</b> vault
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'belt_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.belt_ETH.NewPool,
    collateralAddress: addresses.BSC.V2.belt_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BELT,
      params: [addresses.BSC.V2.belt_ETH.PoolId],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://beta.belt.fi/">
              belt
            </a>
            , scroll down to the <b>Belt Vaults</b> section and deposit <b>ETH</b> into the{' '}
            <b>ETH</b> vault
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'belt_BTCB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.belt_BTCB.NewPool,
    collateralAddress: addresses.BSC.V2.belt_BTCB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BELT,
      params: [addresses.BSC.V2.belt_BTCB.PoolId],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://beta.belt.fi/">
              belt
            </a>
            , scroll down to the <b>Belt Vaults</b> section and deposit <b>BTCB</b> into the{' '}
            <b>BTCB</b> vault
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.BSC.V2.popsicle_ICE_BNB.Underlying, 'pancakeswap_bsc'],
    },
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'popsicle_ICE_BNB',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.popsicle_ICE_BNB.NewPool,
    collateralAddress: addresses.BSC.V2.popsicle_ICE_BNB.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.BSC.ICE}/ETH"
            >
              SushiSwap
            </a>
            and supply liquidity to the <b>ICE-BNB</b> pair by depositing <b>ICE</b> and <b>BNB</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'popsicle_ICE',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.popsicle_ICE.NewPool,
    collateralAddress: addresses.BSC.V2.popsicle_ICE.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://exchange.pancakeswap.finance/"
            >
              PancakeSwap
            </a>
            and convert assets to <b>ICE</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'ellipsis_FUSDT',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.ellipsis_FUSDT.NewPool,
    collateralAddress: addresses.BSC.V2.ellipsis_FUSDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM],
    rewardTokenSymbols: ['bFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ellipsis.finance/fusdt/deposit"
            >
              ellipsis
            </a>
            and deposit <b>USD stablecoins</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.BSC_MAINNET,
    id: 'ellipsis_BTC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.BSC.V2.ellipsis_BTC.NewPool,
    collateralAddress: addresses.BSC.V2.ellipsis_BTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.BSC.bFARM, addresses.BSC.ampliFARM],
    rewardTokenSymbols: ['bFARM', 'ampliFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ellipsis.finance/ren/deposit"
            >
              ellipsis
            </a>
            and deposit <b>BTC assets</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'complifi_COMPFI_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.complifi_COMPFI_WETH.NewPool,
    collateralAddress: addresses.V2.complifi_COMPFI_WETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/add/v2/v2/${addresses.COMFI}/eth"
            >
              Uniswap
            </a>
            and supply liquidity to the <b>COMFI-ETH</b> pair by depositing <b>COMFI</b> and{' '}
            <b>ETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_ZUSD_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3,
      params: [addresses.V2.UniV3_ZUSD_ETH.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ZUSD_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_ZUSD_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_zUSD_USDC_full_range',
    tradingApyFunction: {
      type: 'UNIV3_V2',
      params: [addresses.V2.UniV3_zUSD_USDC_full_range.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_zUSD_USDC_full_range.NewPool,
    collateralAddress: addresses.V2.UniV3_zUSD_USDC_full_range.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_ETH_sETH2',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_ETH_sETH2.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ETH_sETH2.NewPool,
    collateralAddress: addresses.V2.UniV3_ETH_sETH2.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDC_ETH',
    type: POOL_TYPES.UNIV3,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_USDC_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    contractAddress: addresses.V2.UniV3_USDC_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_MANAGED',
    type: POOL_TYPES.UNIV3,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_USDC_ETH_MANAGED.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    contractAddress: addresses.V2.UniV3_USDC_ETH_MANAGED.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_MANAGED.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DPI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_DPI_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DPI_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_DPI_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_UST_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_UST_USDT.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_UST_USDT.NewPool,
    collateralAddress: addresses.V2.UniV3_UST_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM, addresses.LUNA],
    rewardTokenSymbols: ['iFARM', 'LUNA'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDC_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_USDC_USDT.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_USDT.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_WBTC_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_WBTC_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_WBTC_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_WBTC_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_ETH_USDT',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_ETH_USDT.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_ETH_USDT.NewPool,
    collateralAddress: addresses.V2.UniV3_ETH_USDT.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DAI_USDC',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_DAI_USDC.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_USDC.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DAI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_DAI_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_UNI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_UNI_ETH.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_UNI_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_UNI_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_FCASH_USDC',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_FCASH_USDC.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_FCASH_USDC.NewPool,
    collateralAddress: addresses.V2.UniV3_FCASH_USDC.NewVault,
    rewardAPY: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Get fCash{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://fcash.farmdashboard.xyz/">
              here
            </a>
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDT_ETH_1400_2400',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDT_ETH_1400_2400.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDT_ETH_1400_2400.NewPool,
    collateralAddress: addresses.V2.UniV3_USDT_ETH_1400_2400.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_USDC_ETH_1400_2400',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_USDC_ETH_1400_2400.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_USDC_ETH_1400_2400.NewPool,
    collateralAddress: addresses.V2.UniV3_USDC_ETH_1400_2400.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_DAI_ETH_1400_2400',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [
        addresses.V2.UniV3_DAI_ETH_1400_2400.NewVault,
        'uniswapv3_eth',
        strat30PercentFactor,
      ],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_DAI_ETH_1400_2400.NewPool,
    collateralAddress: addresses.V2.UniV3_DAI_ETH_1400_2400.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvThreeCrypto',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvThreeCrypto.NewPool,
    collateralAddress: addresses.V2.crvThreeCrypto.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['crypto-0'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://curve.fi/tricrypto2/deposit"
            >
              curve.fi
            </a>
            and deposit <b>WBTC, ETH, and/or USDT</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'crvCVXCRV',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.crvCVXCRV.NewPool,
    collateralAddress: addresses.V2.crvCVXCRV.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.CONVEX,
      params: ['cvxcrv'],
    },
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://curve.fi/factory/22/deposit"
            >
              curve.fi
            </a>
            and deposit <b>CRV and/or cvxCRV</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'bal_BAL_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_BAL_WETH.NewPool,
    collateralAddress: addresses.V2.bal_BAL_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.bal_BAL_WETH.Underlying, 'balancerv2_eth'],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/#/pool/${addresses.V2.bal_BAL_WETH.PoolId}"
            >
              balancer.fi
            </a>
            and deposit <b>BAL</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'bal_DAI_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_DAI_WETH.NewPool,
    collateralAddress: addresses.V2.bal_DAI_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_DAI_WETH.PoolId, CHAINS_ID.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/#/pool/${addresses.V2.bal_DAI_WETH.PoolId}"
            >
              balancer.fi
            </a>
            and deposit <b>DAI</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'bal_USDC_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_USDC_WETH.NewPool,
    collateralAddress: addresses.V2.bal_USDC_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_USDC_WETH.PoolId, CHAINS_ID.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/#/pool/${addresses.V2.bal_USDC_WETH.PoolId}"
            >
              balancer.fi
            </a>
            and deposit <b>USDC</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'bal_USDT_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_USDT_WETH.NewPool,
    collateralAddress: addresses.V2.bal_USDT_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_USDT_WETH.PoolId, CHAINS_ID.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/#/pool/${addresses.V2.bal_USDT_WETH.PoolId}"
            >
              balancer.fi
            </a>
            and deposit <b>USDT</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'bal_WBTC_WETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.bal_WBTC_WETH.NewPool,
    collateralAddress: addresses.V2.bal_WBTC_WETH.NewVault,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.BALANCER,
      params: [addresses.V2.bal_WBTC_WETH.PoolId, CHAINS_ID.ETH_MAINNET],
    },
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.balancer.fi/#/pool/${addresses.V2.bal_WBTC_WETH.PoolId}"
            >
              balancer.fi
            </a>
            and deposit <b>WBTC</b> and <b>WETH</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_BUSD_USDC',
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_BUSD_USDC.NewPool,
    collateralAddress: addresses.V2.UniV3_BUSD_USDC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_BUSD_USDC.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_renBTC_wBTC',
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_renBTC_wBTC.NewPool,
    collateralAddress: addresses.V2.UniV3_renBTC_wBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3_APYVISION,
      params: [addresses.V2.UniV3_renBTC_wBTC.NewVault, 'uniswapv3_eth', strat30PercentFactor],
    },
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.uni_FOX_WETH.Underlying, 'uniswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'uni_FOX_WETH',
    type: POOL_TYPES.INCENTIVE_BUYBACK,
    contractAddress: addresses.V2.uni_FOX_WETH.NewPool,
    collateralAddress: addresses.V2.uni_FOX_WETH.NewVault,
    rewardAPY: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fox.shapeshift.com/fox-farming/liquidity/add"
          >
          Shapeshift
          </a>
          and provide liquidity using <b>FOX</b> and <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_PHTR_FARM.Underlying, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_PHTR_FARM',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_PHTR_FARM.NewPool,
    collateralAddress: addresses.V2.sushi_PHTR_FARM.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.PHTR}/${addresses.FARM}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>PHTR-FARM</b> pair by depositing <b>PHTR</b> and
            <b>FARM</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_PHTR_ETH.Underlying, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_PHTR_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_PHTR_ETH.NewPool,
    collateralAddress: addresses.V2.sushi_PHTR_ETH.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.iFARM, addresses.PHTR],
    rewardTokenSymbols: ['iFARM', 'PHTR'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/add/${addresses.PHTR}/${addresses.WETH}"
            >
              Sushiswap
            </a>
            and supply liquidity to the <b>PHTR-ETH</b> pair by depositing <b>PHTR</b> and
            <b>ETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_REI_ETH',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3,
      params: [addresses.V2.UniV3_REI_ETH.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_REI_ETH.NewPool,
    collateralAddress: addresses.V2.UniV3_REI_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_REI_ETH_full_range',
    tradingApyFunction: {
      type: 'UNIV3_V2',
      params: [addresses.V2.UniV3_REI_ETH_full_range.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_REI_ETH_full_range.NewPool,
    collateralAddress: addresses.V2.UniV3_REI_ETH_full_range.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'UniV3_REI_wBTC',
    tradingApyFunction: {
      type: TRADING_APY_TYPES.UNIV3,
      params: [addresses.V2.UniV3_REI_wBTC.NewVault],
    },
    type: POOL_TYPES.UNIV3,
    contractAddress: addresses.V2.UniV3_REI_wBTC.NewPool,
    collateralAddress: addresses.V2.UniV3_REI_wBTC.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JEUR_USDC_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.jarvis_JEUR_USDC_HODL.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fAURFEB22_USDC', 'fAURAPR22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dmm.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c/0xa1219DBE76eEcBf7571Fed6b020Dd9154396B70e">
            KyberDMM
          </a>
          and add liquidity for jEUR-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JGBP_USDC_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.jarvis_JGBP_USDC_HODL.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fAURFEB22_USDC', 'fAURAPR22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dmm.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c/0xbb2d00675B775E0F8acd590e08DA081B2a36D3a6">
            KyberDMM
          </a>
          and add liquidity for jGBP-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.Underlying, 'kyber_matic'],
    },
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_JCHF_USDC_HODL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.jarvis_JCHF_USDC_HODL.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM', 'WMATIC', 'fAURFEB22_USDC', 'fAURAPR22_USDC'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dmm.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xbD1463F02f61676d53fd183C2B19282BFF93D099/0x439E6A13a5ce7FdCA2CC03bF31Fb631b3f5EF157">
            KyberDMM
          </a>
          and add liquidity for jCHF-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'jarvis_AUR_USDC',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.MATIC.V2.jarvis_AUR_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.jarvis_AUR_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dmm.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xfAdE2934b8E7685070149034384fB7863860D86e/0xA0fB4487c0935f01cBf9F0274FE3CdB21a965340">
            KyberDMM
          </a>
          and add liquidity for AUR-USDC
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_BTC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_BTC.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_BTC.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_BTC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_BTC.PoolId}">
            balancer
          </a>
          and invest <b>WBTC</b> or <b>renBTC</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'bal_POLYBASE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_POLYBASE.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_POLYBASE.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_POLYBASE.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.balancer_POLYBASE.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_POLYBASE.PoolId}">
            balancer
          </a>
          and invest <b>WMATIC</b>, <b>USDC</b>, <b>WETH</b> or <b>BAL</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_TRICRYPTO',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_TRICRYPTO.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_TRICRYPTO.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_TRICRYPTO.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.balancer_TRICRYPTO.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_TRICRYPTO.PoolId}">
            balancer
          </a>
          and invest <b>WBTC</b>, <b>USDC</b>, or <b>WETH</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'balancer_STABLE',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.MATIC.V2.balancer_STABLE.Underlying, 'balancerv2_matic'],
    },
    contractAddress: addresses.MATIC.V2.balancer_STABLE.NewPool,
    collateralAddress: addresses.MATIC.V2.balancer_STABLE.NewVault,
    oldPoolContractAddress: addresses.MATIC.V2.balancer_STABLE.OldPool,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
    <div class="help-message">
      <b>Deposit and stake:</b>
      <ol class="numeric-list">
        <li>
          Go to&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://polygon.balancer.fi/#/pool/${addresses.MATIC.V2.balancer_STABLE.PoolId}">
            balancer
          </a>
          and invest <b>USDT</b>, <b>miMATIC</b>, <b>USDC</b> or <b>DAI</b>
        </li>
        <li>
          Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
          &quot;Stake for rewards&quot; checked for staking
        </li>
      </ol>
    </div>
 `,
  },
  {
    tradingApyFunction: {
      type: TRADING_APY_TYPES.LP,
      params: [addresses.V2.sushi_YEL_ETH.Underlying, 'sushiswap_eth'],
    },
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'sushi_YEL_ETH',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.sushi_YEL_ETH.NewPool,
    collateralAddress: addresses.V2.sushi_YEL_ETH.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
        <li>
        Go to&nbsp;
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.sushi.com/add/ETH/${addresses.YEL}"
          >
            Sushiswap
          </a>
          and supply liquidity to the <b>YEL-ETH</b> pair by depositing <b>YEL</b> and
          <b>ETH</b>
        </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.ETH_MAINNET,
    id: 'yelhold_YEL',
    type: POOL_TYPES.INCENTIVE,
    contractAddress: addresses.V2.yelhold_YEL.NewPool,
    collateralAddress: addresses.V2.yelhold_YEL.NewVault,
    rewardAPY: [],
    rewardTokens: [addresses.iFARM],
    rewardTokenSymbols: ['iFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.sushi.com/swap"
            >
             Sushiswap
            </a>
            and swap assets to <b>YEL</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
   `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_BANANA_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_BANANA_MATIC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_BANANA_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_BANANA_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/ETH/${addresses.MATIC.BANANA}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>BANANA-MATIC</b> pair by depositing <b>BANANA</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_ETH_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_ETH_MATIC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_ETH_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_ETH_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/ETH/${addresses.MATIC.pWETH}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>ETH-MATIC</b> pair by depositing <b>ETH</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_DAI_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_DAI_MATIC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_DAI_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_DAI_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/ETH/${addresses.MATIC.pDAI}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>DAI-MATIC</b> pair by depositing <b>DAI</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_USDT_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_USDT_MATIC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_USDT_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_USDT_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/ETH/${addresses.MATIC.pUSDT}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>USDT-MATIC</b> pair by depositing <b>USDT</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_BTC_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_BTC_MATIC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_BTC_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_BTC_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/ETH/${addresses.MATIC.pWBTC}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>BTC-MATIC</b> pair by depositing <b>BTC</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_DAI_USDC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_DAI_USDC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_DAI_USDC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_DAI_USDC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/${addresses.MATIC.pUSDC}/${addresses.MATIC.pDAI}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>DAI-USDC</b> pair by depositing <b>DAI</b> and
              <b>USDC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
  {
    chain: CHAINS_ID.MATIC_MAINNET,
    id: 'ape_BNB_MATIC',
    type: POOL_TYPES.INCENTIVE,
    tradingApyFunction: {
      type: TRADING_APY_TYPES.APE,
      params: [addresses.MATIC.V2.ape_BNB_MATIC.ApePoolId, CHAINS_ID.MATIC_MAINNET],
    },
    contractAddress: addresses.MATIC.V2.ape_BNB_MATIC.NewPool,
    collateralAddress: addresses.MATIC.V2.ape_BNB_MATIC.NewVault,
    rewardAPY: [],
    rewardAPR: null,
    rewardTokens: [addresses.MATIC.miFARM],
    rewardTokenSymbols: ['miFARM'],
    stakeAndDepositHelpMessage: `
      <div class="help-message">
        <b>Deposit and stake:</b>
        <ol class="numeric-list">
          <li>
            Go to&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apeswap.finance/add/ETH/${addresses.MATIC.pBNB}"
              >
                Apeswap
              </a>
              and supply liquidity to the <b>BNB-MATIC</b> pair by depositing <b>BNB</b> and
              <b>MATIC</b>
          </li>
          <li>
            Go back to this vault, hit &quot;MAX&quot; and then &quot;Deposit&quot;. Leave
            &quot;Stake for rewards&quot; checked for staking
          </li>
        </ol>
      </div>
    `,
  },
]
