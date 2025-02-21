import { describe, it } from '@std/bdd';
import { expect } from '@std/expect';
import { ConsumerAccountMock, ConsumerNotFoundProviderMock } from '-/test/mocks/providerMocks.ts';

import ProviderException from '~/provider/exceptions/ProviderException.ts';

import constructFn from '~/common/functions/constructFn.ts';

describe('provider', () => {
  
  it('throws if provider do not exist and is not optional', () => {
    expect(() => constructFn(ConsumerNotFoundProviderMock)).toThrow(ProviderException)
  });

  const consumerAccountMock = constructFn(ConsumerAccountMock)

  it('inject on constructor property', () => {
    expect(consumerAccountMock.getUserFirstName()).toEqual('Eduardo')
  });

  it('inject on first field property', () => {
    expect(consumerAccountMock.getFirstAccessorUserFirstName()).toEqual('Eduardo')
    expect(consumerAccountMock.getSecondAccessorUserFirstName()).toEqual('Eduardo')
  });
});
