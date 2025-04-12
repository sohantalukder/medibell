import {useMutation} from '@tanstack/react-query';
import MedicineService from '../services/Medicne.service';
import {GETTING_PAYLOAD} from '@services/types';

const useGetMedicine = () => {
  return useMutation({
    mutationFn: (payload: GETTING_PAYLOAD) => MedicineService.getList(payload),
  });
};

export default useGetMedicine;
