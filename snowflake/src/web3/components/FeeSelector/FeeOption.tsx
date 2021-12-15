import { Trans } from '@lingui/macro'
import { FeeAmount } from '@uniswap/v3-sdk'
import { ButtonRadioChecked } from 'web3/components/Button'
import { AutoColumn } from 'web3/components/Column'
import { useFeeTierDistribution } from 'web3/hooks/useFeeTierDistribution'
import { PoolState } from 'web3/hooks/usePools'
import React from 'react'
import styled from 'styled-components/macro'
import { ThemedText } from 'web3/theme'

import { FeeTierPercentageBadge } from './FeeTierPercentageBadge'
import { FEE_AMOUNT_DETAIL } from './shared'

const ResponsiveText = styled(ThemedText.Label)`
  line-height: 16px;
  font-size: 14px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
    line-height: 12px;
  `};
`

interface FeeOptionProps {
  feeAmount: FeeAmount
  active: boolean
  distributions: ReturnType<typeof useFeeTierDistribution>['distributions']
  poolState: PoolState
  onClick: () => void
}

export function FeeOption({ feeAmount, active, poolState, distributions, onClick }: FeeOptionProps) {
  return (
    <ButtonRadioChecked active={active} onClick={onClick}>
      <AutoColumn gap="sm" justify="flex-start">
        <AutoColumn justify="flex-start" gap="6px">
          <ResponsiveText>
            <Trans>{FEE_AMOUNT_DETAIL[feeAmount].label}%</Trans>
          </ResponsiveText>
          <ThemedText.Main fontWeight={400} fontSize="12px" textAlign="left">
            {FEE_AMOUNT_DETAIL[feeAmount].description}
          </ThemedText.Main>
        </AutoColumn>

        {distributions && (
          <FeeTierPercentageBadge distributions={distributions} feeAmount={feeAmount} poolState={poolState} />
        )}
      </AutoColumn>
    </ButtonRadioChecked>
  )
}
