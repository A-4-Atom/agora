/**
 * Agora - Close the loop
 * © 2021-2022 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

function assessment() {
    this.id = -1;
    this.assessmentType = -1;
    this.assessmentName = "";
    this.assessmentDescription = "";
    this.isRequired = "";
    this.active = true;
    this.createTime;

    // questions go here
    this.questions = [];

    // completed assessments (by userId) must only be used for the current user! 
    // and of course this assessmentId (pre and post mean more then one often, hense the array)
    // TODO: impletement this, in getTopicWithEverythingById? other places?
    this.completedAssessments = [];
    
}

exports.emptyAssessment = () => {
    return new assessment();
}

exports.ormAssessment = function (row) {
    let assessment = exports.emptyAssessment();
    assessment.id = row.id;
    assessment.assessmentType = row.assessment_type;
    assessment.assessmentName = row.assessment_name;
    assessment.assessmentDescription = row.assessment_description;
    assessment.isRequired = row.is_required;
    assessment.active = row.active;
    assessment.createTime = row.create_time;
    return assessment;
}