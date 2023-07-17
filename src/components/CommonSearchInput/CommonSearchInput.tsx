import { Input } from 'antd';
import React, { useState } from 'react';
import { ReactComponent as IcGlass } from '~/assets/svg/magnifyingGlass.svg';

export const CommonSearchInput = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <Input
      size="large"
      placeholder="Search..."
      prefix={<IcGlass />}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};
