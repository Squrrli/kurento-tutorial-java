"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var stream_service_1 = require("./stream.service");
describe('StreamService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [stream_service_1.StreamService]
        });
    });
    it('should be created', testing_1.inject([stream_service_1.StreamService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=stream.service.spec.js.map