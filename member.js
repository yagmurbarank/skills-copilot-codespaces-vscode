function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'moduls/skills/views/memeber.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '=',
        }

    };
}