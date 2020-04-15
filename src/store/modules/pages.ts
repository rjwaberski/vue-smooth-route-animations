import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import { TransitionName } from '@/utils/enums';

@Module({
  namespaced: true,
})
export default class PagesModule extends VuexModule {
  pageTransition: TransitionName = TransitionName.Fade;

  @Mutation
  setPage(transition: TransitionName) {
    this.pageTransition = transition;
  }
}
