// experimental
import create from 'zustand'

type State = {
    bears: any
    increasePopulation: any
    removeAllBears: any
  };

export const useStore = create<State>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}));

export function BearCounter() {
    const bears = useStore(state => state.bears)
    return <h1>{bears} around here ...</h1>
  }
  
export function Controls() {
    const increasePopulation = useStore(state => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
  }

 