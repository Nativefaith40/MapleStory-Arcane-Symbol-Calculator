
import React from 'react'

import { Form, Switch,InputNumber, Avatar } from 'antd'

import { withTranslation } from '../../i18n'

const PartyQuest = ({ t, regionKey: key, pquest }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Form.Item
      name={[key, 'party']}
      label={
        pquest.type === 'symbol' ? (
          <div style={{ cursor: 'pointer' }}>{t('party_quest')}</div>
        ) : (
          <Avatar
            src={`/${key}-coin.png`}
            alt={t('alt_coin', {
              name: t(pquest.name),
            })}
            style={{ cursor: 'pointer' }}
          />
        )
      }
      style={{
        display: 'inline-flex',
        marginBottom: 0,
      }}
      valuePropName={pquest.count ? 'checked' : 'value'}
    >
      {/* if party quest has static value, use swtich button */}
      {pquest.count ? (
        <Switch checkedChildren={pquest.count} unCheckedChildren="0" />
      ) : (
        <InputNumber
          min={0}
          max={pquest.dailyMax}
          defaultValue={0}
          style={{ width: 70 }}
          precision={0}
        />
      )}
    </Form.Item>
    {pquest.unit && <span>&nbsp;/&nbsp;{pquest.unit}</span>}
  </div>
)

export default withTranslation('index')(PartyQuest)
