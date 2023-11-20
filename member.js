function skillsmember(){
        return{
            restrict: 'E',
            templateUrl: 'modules/skills/views/member.html',
            controller: 'SkillsMemberControler',
            controllerAs: 'vm',
            binToController: true,
                scope: {
                    member: '=',

                }

        };
}