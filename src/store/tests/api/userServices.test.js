import axios from 'axios';
import { getUserInfo, updateUserInfo } from '../../api/userServices';

jest.mock('axios');

describe('user Api services', () => {
  const data = ['some data'];

  beforeEach(() => {
    axios.get.mockResolvedValue(data);
    axios.patch.mockResolvedValue(data);
  });

  it('should return data as a result from getUserInfo()', async () => {
    const infoMovie = await getUserInfo();
    expect(infoMovie).toBe(data);
  });

  it('should return data as a result from updateUserInfo()', async () => {
    const infoMovie = await updateUserInfo();
    expect(infoMovie).toBe(data);
  });
});
