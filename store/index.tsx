import { create } from 'zustand';

type TResult = {
  audience: string;
  places: { description: string; name: string }[];
};

type TAud = {
  audience_places: TResult[];
  destination: string;
};

type TStore = {
  videoUrls: string[];
  result: TAud;
  setResult: (value: TAud) => void;
  setvideoUrls: (value: any) => void;
};

const useGenerativestroe = create<TStore>((set) => ({
  videoUrls: [],
  result: {},
  setResult: (value) => set(() => ({ result: value })),
  setvideoUrls: (value) => set(() => ({ videoUrls: value })),
}));

export default useGenerativestroe;
