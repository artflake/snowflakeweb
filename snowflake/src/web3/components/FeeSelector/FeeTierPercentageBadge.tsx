import { Trans } from '@lingui/macro'
import { FeeAmount } from '@uniswap/v3-sdk'
import Badge from 'web3/components/Badge'
import { useFeeTierDistribution } from 'web3/hooks/useFeeTierDistribution'
import { PoolState } from 'web3/hooks/usePools'
import React from 'react'
import { ThemedText } from 'web3/theme'

export function FeeTierPercentageBadge({
  feeAmount,
  distributions,
  poolState,
}: {
  feeAmount: FeeAmount
  distributions: ReturnType<typeof useFeeTierDistribution>['distributions']
  poolState: PoolState
}) {
  return (
    <Badge>
      <ThemedText.Label fontSize={10}>
        {!distributions || poolState === PoolState.NOT_EXISTS || poolState === PoolState.INVALID ? (
          <Trans>Not created</Trans>
        ) : distributions[feeAmount] !== undefined ? (
          <Trans>{distributions[feeAmount]?.toFixed(0)}% select</Trans>
        ) : (
          <Trans>No data</Trans>
        )}
      </ThemedText.Label>
    </Badge>
  )
}
