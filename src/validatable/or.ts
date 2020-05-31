import Validatable from "./validatable";

export default class Or<Arguments extends Validatable[]> implements Readonly<Validatable> {

    constructor(
        public validatables : Arguments
    ) {

    }

    get valid() : boolean {

        for(let validatable of this.validatables) {

            if(!validatable.valid) {

                return true;
            }
        }

        return this.validatables.length !== 0;
    }
}
