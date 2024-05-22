document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and running");

    // Function to translate specific text of elements
    function translateSpecificText(selector, translations) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function (element) {
            var originalText = element.textContent.trim();
            if (translations[originalText]) {
                element.textContent = translations[originalText];
                console.log(`Translated: ${originalText} to ${element.textContent}`);
            }
        });
    }

    // Translate field group headers
    var fieldGroupHeaders = document.querySelectorAll('.field_group_name_header.ng-binding.ng-scope');
    fieldGroupHeaders.forEach(function (header) {
        switch (header.textContent.trim()) {
            case 'אישורי פרסומי תמונות':
                header.textContent = 'Image Publishing Permissions';
                console.log('Translated אישורי פרסומי תמונות to Image Publishing Permissions');
                break;
            case 'שמות האנשים המורשים לקחת את ילד/ה מהגן':
                header.textContent = 'Authorized People to Pick Up Child';
                console.log('Translated שמות האנשים המורשים לקחת את ילד/ה מהגן to Authorized People to Pick Up Child');
                break;
            case 'פרטי הילד/ה':
                header.textContent = 'Child Details';
                console.log('Translated פרטי הילד/ה to Child Details');
                break;
            case 'פרטים נוספים על המסמכים':
                header.textContent = 'Document Fields';
                console.log('Translated פרטים נוספים על המסמכים to Document Fields');
                break;
            case 'הגבלות רפואיות':
                header.textContent = 'Health Limitations';
                console.log('Translated הגבלות רפואיות to Health Limitations');
                break;
            case 'פרטי חשבון בנק':
                header.textContent = 'Bank Account Details';
                console.log('Translated פרטי חשבון בנק to Bank Account Details');
                break;
            case 'מערכת':
                header.textContent = 'Declartion';
                console.log('Translated מערכת to Declartion');
                break;
            case 'שדות למסמכים':
                header.textContent = 'Files';
                console.log('Translated שדות למסמכים to Files');
                break;
            default:
                break;
        }
    });

    // Translate add repeatable group buttons
    var addRepeatableGroupButtons = document.querySelectorAll('.add_repeatable_group.ng-scope a');
    addRepeatableGroupButtons.forEach(function (button) {
        switch (button.textContent.trim()) {
            case '+ שמות האנשים המורשים לקחת את ילד/ה מהגן +':
                button.textContent = '+ Authorized people to pick up the child from kindergarten +';
                console.log('Translated + שמות האנשים המורשים לקחת את ילד/ה מהגן + to + Authorized people to pick up the child from kindergarten +');
                break;
            case '+ שדות למסמכים +':
                button.textContent = '+ Fields for documents +';
                console.log('Translated + שדות למסמכים + to + Fields for documents +');
                break;
            default:
                break;
        }
    });

    // Translate other form labels and placeholders
    translateSpecificText('label[for="enrollment_child_name"]', {
        '': 'First Name'
    });
    translateSpecificText('label[for="enrollment_child_last_name"]', {
        '': 'Last Name'
    });
    translateSpecificText('label[for="enrollment_branch_name"]', {
        '': 'Center'
    });
    translateSpecificText('label[for="enrollment_authorized_pickup_name"]', {
        '': 'Name'
    });
    translateSpecificText('label[for="enrollment_authorized_pickup_kin"]', {
        '': 'Relation'
    });
    translateSpecificText('label[for="enrollment_authorized_pickup_phone"]', {
        '': 'Phone Number'
    });
    translateSpecificText('label[for="enrollment_images_closed_facebook_group"]', {
        '': 'We request and confirm that you upload photos of our child to the kindergarten\'s closed Facebook group'
    });
    translateSpecificText('label[for="enrollment_images_website_and_newsletter"]', {
        '': 'We approve the publication of a photo of our son/daughter on the open main page of Newton Gardens as well'
    });
    translateSpecificText('label[for="fld_2904"]', {
        '': 'I declare all the information above is accurate'
    });
    translateSpecificText('label[for="enrollments_temp_file"]', {
        '': 'Medical and Vaccination Records'
    });
    translateSpecificText('label[for="enrollment_bank_details_num"]', {
        '': 'Bank Account Number'
    });
    translateSpecificText('label[for="enrollment_bank_details_holder_id"]', {
        '': 'ID. Account Holder'
    });

    // Translate buttons
    translateSpecificText('.create_entity_buttons .btn-success', {
        '': 'Submit'
    });

    // Translate header and footer
    translateSpecificText('.content-box .pre-content', {
        '': 'Nursery School Enrollment'
    });
    translateSpecificText('.content-box .post-content', {
        '': 'Notice! In this submission you must accurately fill in all the details. Providing inaccurate details may delay the Enrollment process.'
    });

    // Translate dropdown options
    function translateOptions(selector, translations) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function (selectElement) {
            var options = selectElement.querySelectorAll('option');
            options.forEach(function (option) {
                if (translations[option.value]) {
                    option.textContent = translations[option.value];
                }
            });
        });
    }

    translateOptions('select[name="enrollment_authorized_pickup_kin"]', {
        '- בחר -': '- Select -',
        'סבא': 'Grandfather',
        'סבתא': 'Grandmother',
        'דוד': 'Uncle',
        'דודה': 'Aunt',
        'אח': 'Brother',
        'אחות': 'Sister',
        'חבר': 'Friend (Male)',
        'חברה': 'Friend (Female)',
        'אחר': 'Other'
    });

    translateOptions('select[name="enrollments_temp_file_type"]', {
        '': '- Select -',
        'הסכם': 'Agreement',
        'תמונה': 'Photo',
        'פנקס חיסונים': 'Vaccination Booklet',
        'אחר': 'Other'
    });

    translateOptions('select[name="fld_2146"]', {
        '': '- Select -',
        'מכבי': 'Maccabi',
        'כללית': 'Clalit',
        'לאומית': 'Leumit',
        'מאוחדת': 'Meuhedet',
        'אחר': 'Other'
    });
});
