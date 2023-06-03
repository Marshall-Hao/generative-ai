import { create } from 'zustand';

type TResult = {
  audience: string;
  places: string[];
  video_url: string;
};

type TAud = {
  audience_places: TResult[];
  destination: string;
};

type TStore = {
  result: TAud;
  setResult: (value: TAud) => void;
};

const useGenerativestroe = create<TStore>((set) => ({
  result: {},
  setResult: (value) => set(() => ({ result: value })),
}));

export default useGenerativestroe;
